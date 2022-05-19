import { Progress, Hourglass } from 'react95';
import ThemeButton from '../components/ThemeButton';
export const LoadingScreen = (props) => {

    return (
        <div className='w-50 center mt-5'>
            <div className='loadingbar mt-5'>
                <Hourglass size={32} />
                <br />
                <Progress shadow variant='tile' value={Math.floor(props.percent)} />
                <br />
                <h1 className='text-white'>Loading the greatest website on the internet.</h1>


                <br />
                <ThemeButton />
            </div>
        </div>
    );

}
