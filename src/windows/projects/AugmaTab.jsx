import React from 'react';
import styled from 'styled-components';
import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Toolbar,
    Panel
} from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';
import DisabledToolbar from '../../components/DisabledToolbar';

export const AugmaTab = (props) => {
    const dispatch = useDispatch()



    return (
        <Window className='window pattern-dots'>
            <WindowHeader className='window-header'>
                <span>Augma.exe</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>

            <DisabledToolbar />
            <WindowContent>
                <Panel>
                    <h1 className='mx-5 my-3'>Augma</h1>

                </Panel>
                <br />
                <br />
                <Panel>
                    <p className='m-3'>
                        A freelance project I took on. Augma allows you to buy physical art in an augmented reality marketplace. You can choose from a wide variety of art and place it in your room using the iPhone's AR abilities. You can then order the art directly to your home.
                    </p>
                </Panel>


            </WindowContent>

        </Window>
    );


}