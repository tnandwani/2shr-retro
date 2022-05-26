import { Window, WindowContent, WindowHeader, Button, Panel, Fieldset, Radio, Cutout, Toolbar, Tooltip } from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice';
import { useDispatch } from 'react-redux';

import augmaHeader from './wordart/iconaugma.png'

export const AugmaTab = (props) => {
    const dispatch = useDispatch()

    const toolkit = ['XCode', 'Firebase', "Apple ARKit", "Swift", "Photoshop"]

    return (
        <Window className='window pattern-dots'>
            <WindowHeader className='window-header'>
                <span>Augma.exe</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>

            <Toolbar>
              
                <Button variant='menu' size='sm' onClick={() => { window.open('https://github.com/tnandwani/augma-app') }}>
                    View Code
                </Button>
                <Tooltip text={'Email for demo Request'} enterDelay={100} leaveDelay={200} className= 'text-dark'>
                    <Button disabled variant='menu' size='sm' >
                        Visit Site
                    </Button>
                </Tooltip>
               
            </Toolbar>
            <WindowContent>
                <div className='w-100 mb-3'>
                    <img className='wordArt' src={augmaHeader} alt='augma' />
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
                                                A freelance project I took on. Augma allows you to buy physical art in an augmented reality marketplace. You can choose from a wide variety of art and place it in your room using the iPhone's AR abilities. You can then order the art directly to your home.
                                            </p>
                                        </Panel>


                                        <Panel variant={'inside'}>
                                            <p className='m-3'>
                                                Demo by request per founders request.
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
