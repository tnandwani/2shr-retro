import React, { useState } from 'react'
import {
    Desktop
} from 'react95';

import { useSelector, useDispatch } from 'react-redux'
import { updateWindow } from '../redux/slices/interfaceSlice'

// Projects
import { DiscoTab } from '../windows/projects/DiscoTab';
import { DogWatchTab } from '../windows/projects/DogWatchTab';
import { AugmaTab } from '../windows/projects/AugmaTab';
import { WavbandTab } from '../windows/projects/WavbandTab';


// WIndows

import { About } from '../windows/About';
import { Skills } from '../windows/Skills';
import { Music } from '../windows/Music';
import { Blog } from '../windows/Blog';

import AppStart from '../components/AppStart'

import discoLogo from '../assets/retro-disco.png'
// import wavbandLogo from '../assets/retro-.png'
import augmaLogo from '../assets/retro-augma.png'
import dogwatchLogo from '../assets/retro-dogwatch.png'
import { Msnstart100, Url1103, Progman24, CdMusic, D3FlowerBox100, CurvesAndColors100, Desk100, FlyingWindows100, FlyingThroughSpace100, MystifyYourMind100, ScrollingMarquee100} from '@react95/icons/cjs/';


export default function Main() {

    const dispatch = useDispatch()
    const choice = useSelector((state) => state.interface.window);


    return (
        <div>
            <AppStart />


            {/* content */}
            <main className='m-2'>
                <div className='bts'>
                    {/* Project Icons */}
                    <>
                        <div className='mb-4 d-flex ' onClick={() => { dispatch(updateWindow('Dog Watch')) }} >
                            <ScrollingMarquee100 variant="32x32_4" />
                            <p className='iconText mx-3'>Dog Watch</p>
                        </div>

                        <div className='my-4 d-flex' onClick={() => { dispatch(updateWindow('DISCO')) }} >
                            <FlyingThroughSpace100 variant="32x32_4" />
                            <p className='iconText mx-3'>DISCO</p>
                        </div>
                        <div className='my-4 d-flex' onClick={() => { dispatch(updateWindow('Augma')) }} >
                            <FlyingWindows100 variant="32x32_4" />
                            <p className='iconText mx-3'>Augma</p>
                        </div>
                        <div className='my-4 d-flex' onClick={() => { dispatch(updateWindow('WAV Bands')) }} >
                            <D3FlowerBox100 variant="32x32_4" />
                            <p className='iconText mx-3'>WAV Bands</p>
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
                                <Url1103 onClick={() => { dispatch(updateWindow('Blog')) }} variant="32x32_4" />
                                <p className='iconText'>Blog</p>

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
                            <Blog />
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