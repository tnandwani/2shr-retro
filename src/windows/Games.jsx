import {
    Window,
    WindowContent,
    WindowHeader,
    Button
} from 'react95';

import Snake from '../components/Snake'

import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';


export const Games = (props) => {
    const dispatch = useDispatch()



    return (
        <Window className='window-game pattern-dots'>
            <WindowHeader className='window-header'>
                <span className="snakeFont"> 🐍 Snake</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>

            <div className='w-100'>
                <WindowContent>

                    <Snake />


                </WindowContent>
            </div>


        </Window>
    );


}
