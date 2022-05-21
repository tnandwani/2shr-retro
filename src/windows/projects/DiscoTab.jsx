import { Window, WindowContent, WindowHeader, Button, Panel } from 'react95';


import {updateWindow} from '../../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';

import DisabledToolbar from '../../components/DisabledToolbar';


import discoHeader from './wordart/disco.png';

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
            <DisabledToolbar />


            <WindowContent>
                <div className='w-100 mb-3'>
                    <img className='wordArt' src={discoHeader} alt='disco' />
                </div>
                <Panel>
                    <p className='m-3'>
                        An independent artist platform that provides creators with all the management tools necessary to stay independent forever. Offers services such as rights management, music streaming, live broadcasting, audio marketplace, tour creator, and many more.
                    </p>
                </Panel>
                <Panel>
                    <p className='m-3'>
                        Currently in development (looking for help)
                    </p>
                </Panel>



            </WindowContent>

        </Window>
    );


}
