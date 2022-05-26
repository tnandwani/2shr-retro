import { useState } from 'react';
import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Cutout,
    Tabs,
    Panel,
    TabBody,
    Tab,

} from 'react95';


import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch, useSelector } from 'react-redux';

import ArtistTable from '../components/ArtistTable';

export const Music = (props) => {
    const dispatch = useDispatch()
    const artistChoice = useSelector((state) => state.interface.artist);
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
                    <Tab value={1}>I Helped ✋</Tab>
                    <Tab value={2}>Playlist</Tab>
                </Tabs>
                <TabBody > 
                    <Cutout style= {{height: '50vh'}}>


                        {activeTab === 0 && (
                            <div>
                                <ArtistTable />


                                <Panel style={{ width: '100%', padding: '10px', marginTop: '10px' }}>
                                    <iframe title='drake' src={artistChoice} width="100%" height='80' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                </Panel>
                            </div>
                        )}
                        {activeTab === 1 && (

                            <div class="row row-cols-1 row-cols-sm-2 gx-2 p-2 gy-3 py-2">
                                <div className='col'>
                                    <iframe title='soundcloud1' width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/526787544&color=%230c090a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                                </div>
                                <div className='col'>
                                    <iframe title='soundcloud2' width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522343845&color=%230c090a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                                </div>
                            </div>

                        )}
                        {activeTab === 2 && (
                            <div>
                                <div>
                                    <iframe title='spotify' id='kdot' src="https://open.spotify.com/embed/playlist/0oqsl7rS06QuLtw2PiuwJR?utm_source=generator" width="100%" height="380" frameBorder="0" ></iframe>
                                </div>

                            </div>
                        )}
                    </Cutout>
                </TabBody>
            </WindowContent>


        </Window >
    );


}
