import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Avatar,
    Panel,
    Slider,
    Cutout,

} from 'react95';
import Timeline from '../components/Timeline'
import { updateWindow } from '../redux/slices/interfaceSlice'
import { useDispatch } from 'react-redux';
import myLogo from '.././assets/squarelogo.png'

export const About = (props) => {
    const dispatch = useDispatch()

    return (
        <Window className='window-small pattern-dots'>
            <WindowHeader className='window-header'>
                <span>About Me</span>
                <Button onClick={() => { dispatch(updateWindow('none')) }}>
                    <span>x</span>
                </Button>

            </WindowHeader>
            <WindowContent>
                <div className='mb-3 mt-1'>
                    <Avatar style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} size={100} src={myLogo} />
                </div>
                <div className='row g-3'>


                    <Panel>
                        <p className='p-3 text-center'>
                            Hi there!My name is Tushar Nandwani and I am a self taught developer with my degree in finance. I used to teach programming to kids K-12 for a few years. If a 10 year old can make a website - so can you!
                        </p>
                    </Panel>

                    <Panel>
                        <p className='p-3 text-center'>
                            I used to teach programming to kids K-12 for a few years. If a 10 year old can make a website - so can you!
                        </p>
                    </Panel>


                    <Panel>
                        <p className='p-3 text-center'>
                            🌝      Check out my journey as a developer     🌚
                        </p>
                    </Panel>
                    <Panel style={{ width: '100%' }}>
                        <Timeline/>
                    </Panel>

                </div>
            </WindowContent>

        </Window>
    );


}
