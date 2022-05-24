// Icons
import { Conflnk102, Progman35, Setupslt3000 } from '@react95/icons/cjs/';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button, Panel,
    ColorInput, Divider, List,
    ListItem, Toolbar, Anchor
} from 'react95';
import { changeColor } from '../redux/slices/interfaceSlice';
import ThemeButton from './ThemeButton';




export default function AppStart() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const bgColor = useSelector((state) => state.interface.bgColor);
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <div className='stickyFooter'>
            <Panel style= {{width: '100%'}}>

            
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Button onClick={() => setOpen(!open)} active={open} style={{ fontWeight: 'bold' }}>
                            <img src='https://storybook.react95.io/static/media/logo.2a9c21d8.png' alt='start-logo' style={{ height: '20px', marginRight: 4 }} />
                            Start
                        </Button>
                        {open && (
                            <List
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '100%',
                                    minWidth: '135px',
                                    padding: 5,
                                    zIndex: 1050,
                                }}
                                onClick={() => setOpen(false)}>
                                <ListItem>
                                    <Anchor href="https://www.github.com/tnandwani/" target='_blank'>
                                        Github
                                    </Anchor>
                                    <Setupslt3000 variant="32x32_4" />
                                </ListItem>

                                <ListItem>
                                    <Anchor href="https://www.linkedin.com/in/tnandwani/" target='_blank'>
                                        LinkedIn
                                    </Anchor>
                                    <Conflnk102 variant="32x32_4" />

                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Anchor href="mailto:me@tnandwani.com" target='_blank'>
                                        Email
                                    </Anchor>
                                    <Progman35 variant="32x32_4" />
                                </ListItem>
                            </List>
                        )}
                    </div>

                    <div className='d-flex flex-row '>
                        <div className='mx-2' >
                            <ThemeButton />
                        </div>
                        <div>
                            <ColorInput variant='flat' defaultValue={bgColor} onChange={(value) => { dispatch(changeColor(value.target.value)) }} />
                        </div>
                        <div className='d-none d-lg-block .d-xl-none'>
                            <p className='mt-1 mx-2 '>{date.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </Toolbar>
            </Panel>
        </div>
        
    )
}
