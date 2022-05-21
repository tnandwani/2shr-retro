import {
    Window, WindowContent, WindowHeader, Button, Panel,
    Tabs, Tab, TabBody, Cutout
} from 'react95';


import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const Skills = (props) => {
    const dispatch = useDispatch()

    const [activeTab, setTab] = useState(0);

    const handleChange = (e, value) => setTab(value);

    return (
        <Window className='window-small pattern-dots'>
            <WindowHeader className='window-header'>
                <span>My Skills</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>


            <WindowContent>


                <Panel style={{ width: '100%' }} >
                    <Tabs value={activeTab} onChange={handleChange}>
                        <Tab value={0} >Front End</Tab>
                        <Tab value={1}>Back End</Tab>
                        <Tab value={2}>Dev Ops</Tab>
                    </Tabs>
                    <TabBody >

                        {activeTab === 0 && (

                            // FRONT END
                            <Cutout >
                                <div class="row row-cols-2 row-cols-sm-3 gx-1 p-1 gy-3 py-4">
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                        <p>React</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react native' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                        <p>React Native</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Figma' className='toolLogo' src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format" />
                                        <p>Figma</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Bootstrap' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" />
                                        <p>Bootstrap</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Material' className='toolLogo' src="https://mui.com/static/logo.png" />
                                        <p>Material UI</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Tailwind' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
                                        <p>Tailwind CSS</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Semantic' className='toolLogo' src="https://raw.githubusercontent.com/ngx-semantic/ngx-semantic-docs/master/src/assets/images/logo.png" />
                                        <p>Semantic UI</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='NativeBase' className='toolLogo' src="https://opencollective-production.s3.us-west-1.amazonaws.com/c8a0bb60-c3a1-11eb-b060-23743d16f0de.png" />
                                        <p>NativeBase</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Storyboard' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/en/0/0c/Xcode_icon.png" />
                                        <p>Storyboard</p>
                                    </div>
                                </div>
                            </Cutout>
                        )}
                        {activeTab === 1 && (

                            // BACK END
                            <Cutout >
                                <div class="row row-cols-2 row-cols-sm-3 gx-1 p-1 gy-3 py-4">
                                    <div class="col text-center">
                                        <img alt='NodeJS' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" />
                                        <p>NodeJS</p>
                                    </div>
                                  
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://pngpress.com/wp-content/uploads/2020/04/Firebase-Logo-free-png-219x300.png" />
                                        <p>Firebase</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Google Cloud' className='toolLogo' src="https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" />
                                        <p>Google Cloud</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Redux' className='toolLogo' src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" />
                                        <p>Redux</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='PostgresSQL' className='toolLogo' src="http://assets.stickpng.com/images/584815fdcef1014c0b5e497a.png" />
                                        <p>PostgresSQL</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='AppWrite' className='toolLogo' src="https://miro.medium.com/max/384/1*GftqhTAzDylbY-CISlvkvw.png" />
                                        <p>AppWrite</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='MongoDb' className='toolLogo' src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" />
                                        <p>MongoDb</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='NPM' className='toolLogo' src="https://seeklogo.com/images/N/npm-logo-01B8642EDD-seeklogo.com.png" />
                                        <p>NPM</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='Expo' className='toolLogo' src="https://iconape.com/wp-content/png_logo_vector/cib-expo.png" />
                                        <p>Expo</p>
                                    </div>
                                 
                                </div>
                            </Cutout>
                        )}
                        {activeTab === 2 && (
                            // DEV OPS
                            <Cutout >
                                <div class="row row-cols-2 row-cols-sm-3 gx-1 p-1 gy-3 py-4">
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                                        <p>Github</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://cdn-icons-png.flaticon.com/512/732/732204.png" />
                                        <p>Google Analytics</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://pipedream.com/s.v0/app_XywheN/logo/orig" />
                                        <p>Sentry</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />
                                        <p>Heroku</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://avatars.githubusercontent.com/u/3717923?s=280&v=4" />
                                        <p>Google Maps</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://logodix.com/logo/1695580.png" />
                                        <p>MapQuest</p>
                                    </div>
                                   
                                  
                                </div>
                            </Cutout>
                        )}
                    </TabBody>

                </Panel>


            </WindowContent>

        </Window>
    );


}
