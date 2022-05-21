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
                            <Cutout >
                                <div class="row row-cols-2 row-cols-sm-3 gx-1 p-1 gy-3">
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                        <p>React</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                        <p>React Native</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format" />
                                        <p>Figma</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" />
                                        <p>Bootstrap</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://mui.com/static/logo.png" />
                                        <p>Material UI</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
                                        <p>Tailwind CSS</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://raw.githubusercontent.com/ngx-semantic/ngx-semantic-docs/master/src/assets/images/logo.png" />
                                        <p>Semantic UI</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://opencollective-production.s3.us-west-1.amazonaws.com/c8a0bb60-c3a1-11eb-b060-23743d16f0de.png" />
                                        <p>NativeBase</p>
                                    </div>
                                    <div class="col text-center">
                                        <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/en/0/0c/Xcode_icon.png" />
                                        <p>Storyboard</p>
                                    </div>
                                </div>
                            </Cutout>
                        )}
                        {activeTab === 1 && (
                            <Cutout >
                                <div class="container my-1">
                                    <div class="row row-cols-2 row-cols-sm-3 gx-1 p-1 gy-3">
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                            <p>React</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                            <p>React Native</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format" />
                                            <p>Figma</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" />
                                            <p>Bootstrap</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://mui.com/static/logo.png" />
                                            <p>Material UI</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
                                            <p>Tailwind CSS</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://raw.githubusercontent.com/ngx-semantic/ngx-semantic-docs/master/src/assets/images/logo.png" />
                                            <p>Semantic UI</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://opencollective-production.s3.us-west-1.amazonaws.com/c8a0bb60-c3a1-11eb-b060-23743d16f0de.png" />
                                            <p>NativeBase</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/en/0/0c/Xcode_icon.png" />
                                            <p>Storyboard</p>
                                        </div>
                                    </div>
                                </div>

                            </Cutout>
                        )}
                        {activeTab === 2 && (
                            <Cutout >
                                <div class="container my-1">
                                    <div class="row row-cols-2 row-cols-sm-3 gx-1 p-1 gy-3">
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                            <p>React</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                                            <p>React Native</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format" />
                                            <p>Figma</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" />
                                            <p>Bootstrap</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://mui.com/static/logo.png" />
                                            <p>Material UI</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
                                            <p>Tailwind CSS</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://raw.githubusercontent.com/ngx-semantic/ngx-semantic-docs/master/src/assets/images/logo.png" />
                                            <p>Semantic UI</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://opencollective-production.s3.us-west-1.amazonaws.com/c8a0bb60-c3a1-11eb-b060-23743d16f0de.png" />
                                            <p>NativeBase</p>
                                        </div>
                                        <div class="col text-center">
                                            <img alt='react' className='toolLogo' src="https://upload.wikimedia.org/wikipedia/en/0/0c/Xcode_icon.png" />
                                            <p>Storyboard</p>
                                        </div>
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
