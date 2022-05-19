import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
  
} from 'react95';


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
            

            <WindowContent>




            </WindowContent>

        </Window>
    );


}
