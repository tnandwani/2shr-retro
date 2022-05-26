import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Panel,
    Fieldset,
    Radio,
    Cutout,
    Toolbar,
} from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice';
import { useDispatch } from 'react-redux';
import dogwatchHeader from './wordart/icondogwatch.png';


export const DogWatchTab = (props) => {
    const dispatch = useDispatch()

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
       
                <Button variant='menu' size='sm' onClick={() => { window.open('https://github.com/tnandwani/dog-watch') }}>
                    View Code
                </Button>
                <Button variant='menu' size='sm' onClick={() => { window.open('https://dogwatch.app/') }}>
                    Visit Site
                </Button>
                <Button variant='menu' size='sm' onClick={() => { window.open('https://dogwatch.page.link/join') }}>
                    Get App
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

                                <div className='col-lg-4 text-left'>
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
                                            <div className='container g-3 p-3'>

                                                <p className='mb-3'>
                                                    Available on all platforms ( Web | Android | iOS )
                                                </p>
                                                <Button primary size='md' onClick={() => { window.open('https://dogwatch.page.link/join') }}>
                                                    Download App
                                                </Button>
                                            </div>
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
