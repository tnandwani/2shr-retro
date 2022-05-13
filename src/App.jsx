import React, { useEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/aiee";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import { LoadingScreen } from './screens/loading';
import {
Start} from './screens/start';

import './styler.css'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif'!;
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif'!;
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif'!;

  }
  ${styleReset}
`;

const App = () => {

  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          setLoading(false)
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer)
    };
  }, []);

  return (
    <div className="App d-flex flex-column h-100" >
      <GlobalStyles />
      <ThemeProvider theme={original}>

        {/* Splash Screen */}
        {loading &&
          <LoadingScreen percent={percent} />
        }

        {/* App Page */}
        {!loading && 
        <div className='m-2'>
          <Start/>
        </div>
        }

        


      </ThemeProvider>
    </div>
  );

}
export default App;
