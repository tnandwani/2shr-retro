import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Tabs,
    TabBody,
    Tab,
  
} from 'react95';


import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';

import ArtistTable from '../components/ArtistTable';

export const Music = (props) => {
    const dispatch = useDispatch()
    const [activeTab, setTab] = useState(0);


    const handleChange = (e, value) => setTab(value);

    return (
        <Window className='window-small pattern-dots'>
            <WindowHeader className='window-header'>
                <span>My Music</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>My Top 5</Tab>
                    <Tab value={1}>My Songs</Tab>
                    <Tab value={2}>Playlist</Tab>
                </Tabs>
                <TabBody >
                    {activeTab === 0 && (
                        <div>
                          <ArtistTable />
     
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div>
                            <div>Accesories stuff here</div>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div>
                            <div>
                                <iframe id='kdot' src="https://open.spotify.com/embed/album/1atjqOZTCdrjxjMyCPZc2g?utm_source=generator" width="100%" height="380" frameBorder="0" ></iframe>
                            </div>                        </div>
                    )}
                </TabBody>
            </WindowContent>


        </Window>
    );


}