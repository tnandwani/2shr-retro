import { Window, WindowContent, WindowHeader, Button, Panel } from 'react95';


import { updateWindow } from '../../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';
import DisabledToolbar from '../../components/DisabledToolbar';
import wavbandsHeader from './wordart/wavbands.png';


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
            <DisabledToolbar />


            <WindowContent>
                <div className='w-100 mb-3'>
                    <img className='wordArt' src={wavbandsHeader} alt='disco' />
                </div>
                <Panel>
                    <p className='m-3'>
                        A freelance project I took on. Augma allows you to buy physical art in an augmented reality marketplace. You can choose from a wide variety of art and place it in your room using the iPhone's AR abilities. You can then order the art directly to your home.
                    </p>
                </Panel>


            </WindowContent>

        </Window>
    );


}
