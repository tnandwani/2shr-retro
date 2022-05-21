import { Window, WindowContent, WindowHeader, Button, Panel } from 'react95';


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
            <DisabledToolbar />


            <WindowContent>

                <div className='w-100 mb-3'>
                    <img className='wordArt' src={dogwatchHeader} alt='disco' />
                </div>
                <Panel>
                    <p className='m-3'>
                        An app that is available on all platforms. It serves as a community for dog owners. Users can assign their dog as lost in their neighborhood and alert others users via push notification. They can also view other dogs friends in their neighborhood. Dog Watch also offers important information for new and experienced dog owners.
                    </p>
                </Panel>



            </WindowContent>

        </Window>
    );


}
