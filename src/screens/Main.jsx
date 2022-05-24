import { useSelector, useDispatch } from 'react-redux'
import { updateWindow } from '../redux/slices/interfaceSlice'


import Desktop  from '../components/Desktop';

// Projects
import { DiscoTab } from '../windows/projects/DiscoTab';
import { DogWatchTab } from '../windows/projects/DogWatchTab';
import { AugmaTab } from '../windows/projects/AugmaTab';
import { WavbandTab } from '../windows/projects/WavbandTab';


//images 

import dogWatchLogo from '../assets/retro-dogwatch.png' 
import discoLogo from '../assets/retro-disco.png'
import augmaLogo from '../assets/retro-augma.png' 
import wavbandsLogo from '../assets/retro-wavbands.png' 


// WIndows

import { About } from '../windows/About';
import { Skills } from '../windows/Skills';
import { Music } from '../windows/Music';
import { Games } from '../windows/Games';

import AppStart from '../components/AppStart'


import { Msnstart100, Joy102, Progman24, CdMusic } from '@react95/icons/cjs/';




export default function Main() {

    const dispatch = useDispatch()
    const choice = useSelector((state) => state.interface.window);


    return (
        <div>
            <AppStart />


            {/* content */}
            <main className='m-2 '>
                <div className='bts'>
                    {/* Project Icons */}
                    <>
                        <div className='mb-3' onClick={() => { dispatch(updateWindow('Dog Watch')) }} >
                            <Desktop>
                                <img className='desktopLogo' src={dogWatchLogo} alt="dog watch" />
                            </Desktop>
                        </div>

                        <div className='my-3' onClick={() => { dispatch(updateWindow('DISCO')) }} >
                            <Desktop>
                                <img className='desktopLogo' src={discoLogo} alt="dog watch" />
                            </Desktop>
                        </div>
                        <div className='my-3' onClick={() => { dispatch(updateWindow('Augma')) }} >
                            <Desktop>
                                <img className='desktopLogo' src={augmaLogo} alt="dog watch" />
                            </Desktop>
                        </div>
                        <div className='my-3' onClick={() => { dispatch(updateWindow('WAV Bands')) }} >
                            <Desktop>
                                <img className='desktopLogo' src={wavbandsLogo} alt="dog watch" />
                            </Desktop>
                        </div>
                    </>

                    <div className='otherIcons'>
                        <div className='container text-center'>
                            <div className='mb-2'>
                                <Progman24 onClick={() => { dispatch(updateWindow('About')) }} variant="32x32_4" />
                                <p className='iconText'> About</p>
                            </div>
                            <div className='mb-2'>
                                <Msnstart100 onClick={() => { dispatch(updateWindow('Skills')) }} variant="32x32_4" />
                                <p className='iconText'> Skills</p>

                            </div>
                            <div className='mb-2'>
                                <Joy102 onClick={() => { dispatch(updateWindow('Blog')) }} variant="32x32_4" />
                                <p className='iconText'>Games</p>

                            </div>
                            <div className='mb-2'>
                                <CdMusic onClick={() => { dispatch(updateWindow('Music')) }} variant="32x32_4" />
                                <p className='iconText'>Music</p>

                            </div>
                        </div>
                    </div>


                </div>
                {/* Other Icons */}



                {choice !== 'none' &&
                    <div className='projectModal center'>
                        {choice === 'Dog Watch' &&
                            <DogWatchTab />
                        }
                        {choice === 'DISCO' &&
                            <DiscoTab />
                        }
                        {choice === 'Augma' &&
                            <AugmaTab />
                        }
                        {choice === 'WAV Bands' &&
                            <WavbandTab />
                        }

                        {choice === 'About' &&
                            <About />
                        }
                        {choice === 'Skills' &&
                            <Skills />
                        }
                        {choice === 'Blog' &&
                            <Games />
                        }
                        {choice === 'Music' &&
                            <Music />
                        }

                    </div>
                }
            </main>
        </div>
    );
}
