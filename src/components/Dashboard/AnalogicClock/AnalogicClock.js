import './analogicClock.scss';
import { rotateClock } from './function';
import { useEffect } from 'react';

export const AnalogicClock = () => {
    useEffect(() => {
        setInterval(() => {
            let now = new Date();
            let heur = now.getHours();
            let minut = now.getMinutes();
            let second = now.getSeconds();
            rotateClock(heur, minut, second);
        
        },
        1000);
    }, []);
    return(
        <div className='containerAnalogic'>
        <div className="analogic">
            <div className="heur">
                <div className="hr"></div>
            </div>
            <div className="minut">
                <div className="min"></div>
            </div>
            <div className="second">
                <div className="sec"></div>
            </div>
        </div>
        </div>
    )
}