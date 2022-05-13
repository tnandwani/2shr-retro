import React, { useEffect, useState } from 'react'
import { Progress, Hourglass, Desktop } from 'react95';

export const LoadingScreen = (props) => {

    return (
        <div className='w-50 center mt-5'>
            <div className='loadingbar mt-5'>
                <Hourglass size={32} />
                <br />
                <Progress shadow variant='tile' value={Math.floor(props.percent)} />
                <br />
                <h1>Loading the greatest website on the internet.</h1>

            </div>
        </div>
    );

}
