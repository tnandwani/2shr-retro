import { Window, WindowContent, WindowHeader, Button, Panel, Fieldset, Radio, Cutout, Toolbar, Tooltip } from 'react95';


import { getTooltip, updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch, useSelector } from 'react-redux';
import DisabledToolbar from '../../components/DisabledToolbar';
import dogwatchHeader from './wordart/icondogwatch.png';


export const DogWatchTab = (props) => {
    const dispatch = useDispatch()
    const toolText = useSelector((state) => state.interface.tooltip);

    const toolkit = ['Expo', 'React Native', 'Redux', 'Firestore', 'Google Maps', 'Sentry']


    return (
        <Window className='window pattern-dots'>
            <WindowHeader className='window-header'>
                <span>Dog Watch.exe</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            <Toolbar>
                <Tooltip text={toolText} onMouseEnter={() => { dispatch(getTooltip()) }} enterDelay={100} leaveDelay={200} className= 'text-dark'>
                    <Button variant='menu' size='sm'>
                        File
                    </Button>
                    <Button variant='menu' size='sm'>
                        Edit
                    </Button>

                </Tooltip>
                <Button variant='menu' size='sm' onClick={() => { window.open('https://github.com/tnandwani/disco-music') }}>
                    View Code
                </Button>
                <Button variant='menu' size='sm' onClick={() => { window.open('https://discolive.app/') }}>
                    Visit Site
                </Button>
            </Toolbar>

            <WindowContent>

                <div className='w-100 mb-3'>
                    <img className='wordArt' src={dogwatchHeader} alt='disco' />
                </div>
                <Panel >
                    <Cutout className='cutoutMax'>
                        <div className='container'>

                            <div className='row g-3 py-3'>

                                <div className='col-lg-3 text-left'>
                                    <Panel style={{ width: '100%' }}>
                                        <WindowContent>
                                            <Fieldset label='Made with...'>
                                                {toolkit.map((tool) =>
                                                    <>
                                                        <Radio
                                                            checked={true}
                                                            value={tool}
                                                            label={tool}
                                                            name={tool}
                                                        />
                                                        <br />
                                                    </>
                                                )}

                                            </Fieldset>
                                        </WindowContent>
                                    </Panel>
                                </div>
                                <div className='col-lg'>
                                    <div className='row g-3 mx-1'>
                                        <Panel variant={'inside'}>
                                            <p className='m-3'>
                                                An app that serves as a community for dog owners. Users can assign their dog as lost in their neighborhood and alert others users via push notification. They can also view other dogs friends in their neighborhood. Dog Watch also offers important information for new and experienced dog owners.                                            </p>
                                        </Panel>


                                        <Panel variant={'inside'}>
                                            <p className='m-3'>
                                                Available on all platforms ( Web | Android | iOS )
                                            </p>
                                        </Panel>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Cutout>

                </Panel>




            </WindowContent>

        </Window>
    );


}
