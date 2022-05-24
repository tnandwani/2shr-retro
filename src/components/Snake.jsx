import React, { Component } from "react";
import { Panel, Button } from "react95";

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
    speed: 100,
}

class Snake extends Component {

    constructor() {
        super();
        this.state = initialState;
    }

    componentDidMount() {
        setInterval(this.moveSnake, this.state.speed);
        document.onkeydown = this.changeDirection;
        document.title = "snake-game";
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
                alert(`game over: ${snake.length * 10}`)
            }
        }
    }

    buttonDirection = (direction) => {
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
                        <h1 className="snakeFont mx-5" > SNAKE</h1>
                        <h1>{(this.state.snake.length * 10)-10}</h1>
                    </div>

                </Panel>
                <br />


                <Panel>
                    <div className="snake-container text-center">
                        <div className="snake-grid">{displayRows}</div>
                    </div>
                </Panel>
                <br />



                <Panel>
                    <div className="m-2 mx-5">

                        <Button onClick={() => { this.buttonDirection(UP) }} style={{ margin: '5px', padding: '20px' }}>
                            UP
                        </Button>
                        <div className="d-flex">
                            <Button onClick={() => { this.buttonDirection(LEFT) }} style={{ margin: '5px', padding: '20px' }}>
                                Left
                            </Button>
                            <Button onClick={() => { this.buttonDirection(RIGHT) }} style={{ margin: '5px', padding: '20px' }}>
                                Right
                            </Button>
                        </div>
                        <Button onClick={() => { this.buttonDirection(DOWN) }} style={{ margin: '5px', padding: '20px' }}>
                            DOWN
                        </Button>
                    </div>
                </Panel>
            </div>
        )
    }
}

export default Snake;
