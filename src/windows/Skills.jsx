import React from 'react';
import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Toolbar,
    Panel
} from 'react95';


import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';

import DisabledToolbar from '../components/DisabledToolbar';

export const Skills = (props) => {
    const dispatch = useDispatch()



    return (
        <Window className='window-small pattern-dots'>
            <WindowHeader className='window-header'>
                <span>My Skills</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            

            <WindowContent>




            </WindowContent>

        </Window>
    );


}
