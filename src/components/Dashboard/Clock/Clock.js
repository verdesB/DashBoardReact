
import { updateClock } from './clockFunction'
import { useEffect } from 'react';
import './clock.scss';

export const Clock = () => {

    useEffect(() => {
        updateClock();
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className='containerClock'>
        <div className="clock">
            <div className="hours">

            </div>
            <div className="minutes">

            </div>
            <div className="secondes">

            </div>
            <div className="date"></div>
        </div>
    </div>
    ) 
}