import { Window, WindowContent, WindowHeader, Button, Panel, Fieldset, Radio, Cutout } from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';

import DisabledToolbar from '../../components/DisabledToolbar';


import discoHeader from './wordart/icondisco.png';

export const DiscoTab = (props) => {
    const dispatch = useDispatch()



    return (
        <Window className='window pattern-dots' >
            <WindowHeader className='window-header'>
                <span>DISCO.exe</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            <DisabledToolbar github={'https://github.com/tnandwani/disco-music'} visit={'https://discolive.app/'} />


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
