import { Window, WindowContent, WindowHeader, Button, Panel, Fieldset, Radio, Cutout } from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';
import DisabledToolbar from '../../components/DisabledToolbar';
import dogwatchHeader from './wordart/icondogwatch.png';


export const DogWatchTab = (props) => {
    const dispatch = useDispatch()



    return (
        <Window className='window pattern-dots'>
            <WindowHeader className='window-header'>
                <span>Dog Watch.exe</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            <DisabledToolbar github={'https://github.com/tnandwani/dog-watch'} visit={'https://dogwatch.app/'} />


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
