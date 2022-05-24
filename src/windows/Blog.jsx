import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Panel
} from 'react95';

import Snake from '../components/Snake'

import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';


export const Blog = (props) => {
    const dispatch = useDispatch()



    return (
        <Window className='window-small pattern-dots'>
            <WindowHeader className='window-header'>
                <span>Blog</span>
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
