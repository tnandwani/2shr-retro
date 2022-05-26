import { Window, WindowContent, WindowHeader, Button, Panel, Fieldset, Radio, Cutout } from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';
import DisabledToolbar from '../../components/DisabledToolbar';
import wavbandsHeader from './wordart/iconwavbands.png';


export const WavbandTab = (props) => {
    const dispatch = useDispatch()



    return (
        <Window className='window pattern-dots '>
            <WindowHeader className='window-header'>
                <span>WAV Bands.exe</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            <DisabledToolbar visit={'https://www.kickstarter.com/projects/1288271757/wav-bands-youll-never-need-an-aux-cord-again'} />


            <WindowContent>
                <div className='w-100 mb-3'>
                    <img className='wordArt' src={wavbandsHeader} alt='disco' />
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
                                                The WAV Band is a revolutionary product at the intersection of fashion and technology. It is a simple bracelet that has the power to turn any speaker wireless. Despite it falling in the “geeky” category of a wearable, it manages to effortlessly blend in as a sleek addition to any outfit. Thus, allowing you to carry it wherever you go, without it seeming like a burden. The WAV Band acts as a Bluetooth receiver and allows you to get rid of cables and go wireless!
                                            </p>
                                        </Panel>


                                        <Panel variant={'inside'}>
                                            <p className='m-3'>
                                                Release date TBD
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
