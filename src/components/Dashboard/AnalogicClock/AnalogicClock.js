import './analogicClock.scss';
export const AnalogicClock = () => {
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