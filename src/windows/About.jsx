import React from 'react';
import styled from 'styled-components';
import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Toolbar,
    Tooltip,
    Panel
} from 'react95';

import DisabledToolbar from '../components/DisabledToolbar';
import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';


export const About = (props) => {
    const dispatch = useDispatch()

    return (
        <Window className='window-small pattern-dots'>
            <WindowHeader className='window-header'>
                <span>About Me</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            
            <WindowContent>

                <Panel>
                    <div className='m-3'>
                        <p>
                            Hi there! My name is Tushar Nandwani and I like to build things. All types of things: websites, apps, wearable tech, and even robots at one point.
                        </p>
                        <br />
                        <p>
                            I am a self taught developer with my degree in finance. This duality has allowed me to build entire products from scratch on my own.
                        </p>
                    </div>

                </Panel>



            </WindowContent>

        </Window>
    );


}
