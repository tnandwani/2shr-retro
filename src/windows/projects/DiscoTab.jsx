import { Window, WindowContent, WindowHeader, Button, Panel, Fieldset, Radio, Cutout, Toolbar, Tooltip } from 'react95';


import { getTooltip, updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch, useSelector } from 'react-redux';


import discoHeader from './wordart/icondisco.png';

export const DiscoTab = (props) => {
    const dispatch = useDispatch()
    const toolText = useSelector((state) => state.interface.tooltip);

    const toolkit = ['React', 'Firebase Realtime', 'Google Cloud', 'Heroku', 'Material UI']


    return (
        <Window className='window pattern-dots' >
            <WindowHeader className='window-header'>
                <span>DISCO.exe</span>
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
                    Landing Page
                </Button>
                <Button variant='menu' size='sm' onClick={() => { window.open('https://disco-music.herokuapp.com/') }}>
                    View OLD Prototype
                </Button>
            </Toolbar>


            <WindowContent>
                <div className='w-100 mb-3'>
                    <img className='wordArt' src={discoHeader} alt='disco' />
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
                                                An independent artist platform that provides creators with all the management tools necessary to stay independent forever. Offers services such as rights management, music streaming, live broadcasting, audio marketplace, tour creator, and many more.
                                            </p>
                                        </Panel>


                                        <Panel variant={'inside'}>
                                            <p className='m-3'>
                                                Currently in development (looking for help)
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
