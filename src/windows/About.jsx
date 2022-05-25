import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Avatar,
    Panel
} from 'react95';

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
            <div className='text-center'>


                <WindowContent>
                    <div className='mb-3 mt-1'>
                        <Avatar style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}size={100} src={myLogo} />
                    </div>

                    <Panel>
                        <p className='p-3'>
                            Hi there! My name is Tushar Nandwani and I like to build things. All types of things: websites, apps, wearable tech, and even robots at one point.
                        </p>
                    </Panel>
                    <br />
                    <br />
                    <Panel>
                        <p className='p-3'>
                            I am a self taught developer with my degree in finance. This duality has allowed me to build entire products from scratch on my own.
                        </p>
                    </Panel>

                </WindowContent>
            </div>

        </Window>
    );


}
