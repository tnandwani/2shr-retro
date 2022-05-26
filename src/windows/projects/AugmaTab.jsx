import { Window, WindowContent, WindowHeader, Button, Panel, Fieldset, Radio, Cutout } from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';
import DisabledToolbar from '../../components/DisabledToolbar';

import augmaHeader from './wordart/iconaugma.png'

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
                <div className='w-100 mb-3'>
                    <img className='wordArt' src={augmaHeader} alt='augma' />
                </div>
                <Panel >
                    <Cutout className= 'cutoutMax'>
                        <div className='container'>

                            <div className='row g-3 py-3'>
                             
                                <div className='col-lg-3 text-left'>
                                    <Panel style={{ width: '100%' }}>
                                        <WindowContent>
                                            <Fieldset label='Made with'>
                                                <Radio
                                                    checked={true}
                                                    value='Pear'
                                                    label='🍐 Pear'
                                                    name='fruits'
                                                />
                                                <br />
                                                <Radio
                                                    checked={true}
                                                    value='Orange'
                                                    label='🍊 Orange'
                                                    name='fruits'
                                                />
                                                <br />
                                                <Radio
                                                    checked={true}
                                                    value='Kiwi'
                                                    label='🥝 Kiwi'
                                                    name='fruits'
                                                />
                                                <br />
                                                <Radio
                                                    defaultChecked
                                                    value='Grape'
                                                    label='🍇 Grape'
                                                    name='fruits'

                                                />
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
