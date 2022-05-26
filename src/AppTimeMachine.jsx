import React, { useEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
// pick a theme of your choice

// themes
import aiee from "react95/dist/themes/aiee";
import lilac from "react95/dist/themes/lilac";
import fxDev from "react95/dist/themes/fxDev";
import darkTeal from "react95/dist/themes/darkTeal";
import matrix from "react95/dist/themes/matrix";
import original from "react95/dist/themes/original";
import tokyoDark from "react95/dist/themes/tokyoDark";
import highContrast from "react95/dist/themes/highContrast";
import modernDark from "react95/dist/themes/modernDark";
import polarized from "react95/dist/themes/polarized";
import powerShell from "react95/dist/themes/powerShell";
import solarizedLight from "react95/dist/themes/solarizedLight";
import toner from "react95/dist/themes/toner";
import vistaesqueMidnight from "react95/dist/themes/vistaesqueMidnight";

// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import { LoadingScreen } from './screens/Loading';
import Main from './screens/Main';

import './styler.css'
import { useSelector } from 'react-redux';

var shouldLoad = true;

if (window.location.hostname === 'localhost') {
  shouldLoad = false;
}

const themePack = [modernDark, matrix, original, fxDev, lilac, aiee, lilac, fxDev, darkTeal, tokyoDark, highContrast, polarized, powerShell, solarizedLight, toner, vistaesqueMidnight]

export default function App() {

  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState('past');
  const themeChoice = useSelector((state) => state.interface.theme);
  const bgColor = useSelector((state) => state.interface.bgColor);
  const textColor = useSelector((state) => state.interface.textColor);



  const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif' !important;
    src: url('${ms_sans_serif}') format('woff2')!important;
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif' !important;
    src: url('${ms_sans_serif_bold}') format('woff2') !important;
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif' !important;
          color: ${textColor} !important;
      background:${bgColor};
  }
  ${styleReset}
`;

  const startTimer = () => {
    setLoading('loading')

    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          setLoading('past')
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer)
    };
  }



  return (
    <div className="App d-flex flex-column h-100">
      <GlobalStyles />
      <ThemeProvider theme={themePack[themeChoice]}>

        {/* Splash Screen */}
        {loading !== 'past' &&
          <div className='w-50 center mt-5'>
            <div className='mt-5 text-center'>
              <img src="https://media1.giphy.com/media/Q1TS5UfP86yUoSwkGo/200w.gif" />
              <br />
              <br />
              {loading === 'future' &&
                <button className='btn btn-danger btn-lrg' onClick={() => { startTimer() }}>  Go Back in time</button>

              }
              {loading === 'loading' &&
                <LoadingScreen percent={percent} />

              }
            </div>
          </div>
        }


        {/* App Page */}
        {loading === 'past' &&
          <div className='m-2'>
            <Main />
          </div>
        }

      </ThemeProvider>
    </div>
  );

}
