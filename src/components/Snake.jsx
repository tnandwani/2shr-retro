import { Component } from "react";
import { useSelector } from "react-redux";
import { Panel, Button } from "react95";
import { setHighScore } from "../brain";
import { setScoreState } from "../redux/slices/interfaceSlice";
import store from "../redux/store";

const HEIGHT = 10;
const WIDTH = 10;

// mapping keycode  for changing direction
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const STOP = 32; /* [space] used for pause */

const getRandom = () => {
    return {
        x: Math.floor(Math.random() * WIDTH),
        y: Math.floor(Math.random() * HEIGHT)
    }
}

const emptyRows = () => [...Array(WIDTH)].map((_) => [...Array(HEIGHT)].map((_) => 'grid-item'));

const increaseSpeed = (speed) => speed - 10 * (speed > 10)




const initialState = {
    rows: emptyRows(),
    snake: [getRandom()],
    food: getRandom(),
    direction: STOP,
    speed: 150,
}

let compHighScore;

export function ReduxHighScore() {

    const reduxScore = useSelector((state) => state.interface.highscore);
    compHighScore = reduxScore;
    return (reduxScore)
}


class Snake extends Component {

    constructor() {
        super();
        this.state = initialState;

    }

    componentDidMount() {
        setInterval(this.moveSnake, this.state.speed);
        document.onkeydown = this.changeDirection;

    }

    componentDidUpdate() {
        this.isCollapsed();
        this.isEaten();
    }

    moveSnake = () => {
        let snakeCopy = [...this.state.snake];
        let head = { ...snakeCopy[snakeCopy.length - 1] };
        switch (this.state.direction) {
            case LEFT: head.y += -1; break;
            case UP: head.x += -1; break;
            case RIGHT: head.y += 1; break;
            case DOWN: head.x += 1; break;
            default: return;
        }
        /* keep the value within range of 0 to HEIGHT */
        head.x += HEIGHT * ((head.x < 0) - (head.x >= HEIGHT));
        head.y += WIDTH * ((head.y < 0) - (head.y >= WIDTH));

        snakeCopy.push(head);
        snakeCopy.shift()
        this.setState({
            snake: snakeCopy,
            head: head
        });
        this.update();
    }

    isEaten() {
        let snakeCopy = [...this.state.snake];
        let head = { ...snakeCopy[snakeCopy.length - 1] };
        let food = this.state.food;
        if ((head.x === food.x) && (head.y === food.y)) {
            snakeCopy.push(head);
            this.setState({
                snake: snakeCopy,
                food: getRandom(),
                speed: increaseSpeed(this.state.speed)
            });
        }
    }

    update() {
        let newRows = emptyRows();
        this.state.snake.forEach(element => newRows[element.x][element.y] = 'snake')
        newRows[this.state.food.x][this.state.food.y] = 'food';
        this.setState({ rows: newRows });
    }

    isCollapsed = () => {
        let snake = this.state.snake;
        let head = { ...snake[snake.length - 1] }
        for (let i = 0; i < snake.length - 3; i++) {
            if ((head.x === snake[i].x) && (head.y === snake[i].y)) {
                this.setState(initialState);

                let newScore = snake.length * 10

                // check if new high score
                if (compHighScore < newScore) {
                    // new high score
                    alert(`NEW HIGH SCORE: ${newScore}`)
                    store.dispatch(setScoreState(newScore))
                    setHighScore(newScore)

                }
                else {
                    alert(`game over: ${newScore}`)
                }
            }
        }
    }

    buttonDirection = (newDirection) => {
        let direction = this.state.direction;
        switch (newDirection) {
            case LEFT:
                direction = (direction === RIGHT) ? RIGHT : LEFT;
                break;
            case RIGHT:
                direction = (direction === LEFT) ? LEFT : RIGHT;
                break;
            case UP:
                direction = (direction === DOWN) ? DOWN : UP;
                break;
            case DOWN:
                direction = (direction === UP) ? UP : DOWN;
                break;
            case STOP:
                direction = STOP;
                break;
            default:
                break;
        }
        this.setState({
            direction: direction
        });
    }

    changeDirection = ({ keyCode }) => {
        let direction = this.state.direction;
        switch (keyCode) {
            case LEFT:
                direction = (direction === RIGHT) ? RIGHT : LEFT;
                break;
            case RIGHT:
                direction = (direction === LEFT) ? LEFT : RIGHT;
                break;
            case UP:
                direction = (direction === DOWN) ? DOWN : UP;
                break;
            case DOWN:
                direction = (direction === UP) ? UP : DOWN;
                break;
            case STOP:
                direction = STOP;
                break;
            default:
                break;
        }
        this.setState({
            direction: direction
        });
    }

    render() {
        const displayRows = this.state.rows.map((row, i) => row.map((value, j) => <div name={`${i}=${j}`} className={value} />))
        return (
            <div className="text-center">
                <Panel>
                    <div className="mx-5">
                        <h1 className="snakeFont mx-5" >SNAKE </h1>
                        <h1>GLOBAL HIGH SCORE: <span><ReduxHighScore /></span></h1>

                        {((this.state.direction) === STOP) &&
                            <h1>~ Press any key to start ~</h1>
                        }
                        {((this.state.direction) !== STOP) &&
                            <h1 className="snakeScore">{(this.state.snake.length * 10)} </h1>

                        }

                    </div>

                </Panel>
                <br />


                <Panel>
                    <div className="snake-container text-center">
                        <div className="snake-grid">{displayRows}</div>
                    </div>
                </Panel>
                <br />


                <div className="row m-1">
                    <Panel className= 'p-2'>
                        <Button className='px-5' onClick={() => { this.buttonDirection(UP) }} >
                            ⬆
                        </Button>
                        <div className="d-flex justify-content-center">
                            <Button className='px-5' onClick={() => { this.buttonDirection(LEFT) }}>
                                ⬅
                            </Button>
                            <Button onClick={() => { this.buttonDirection(STOP) }}>
                                🐍
                            </Button>
                            <Button className='px-5' onClick={() => { this.buttonDirection(RIGHT) }}>
                                ⮕
                            </Button>
                        </div>
                        <Button className='px-5' onClick={() => { this.buttonDirection(DOWN) }}>
                            ⬇
                        </Button>
                    </Panel>
                </div>

            </div>
        )
    }
}
export default Snake;
