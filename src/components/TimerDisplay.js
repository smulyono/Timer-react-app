import React, { Component } from 'react';
import 'assets/styles/TimerDisplay.css';

class TimerDisplay extends Component {
    constructor(props) {
        super(props);
        this.adjustdisplay = this.adjustdisplay.bind(this);
    }

    render() {
        const {
            clockDisplay,
            isPassThreshold=false
        } = this.props;

        var {hours,minutes,seconds} = this.adjustdisplay(clockDisplay);

        return(
            <div className='timerdisplay-container'>
                <div className={'timerdisplay-watch '+ (isPassThreshold ? "warning" : "")}>
                    <div>{hours}</div>
                    <div className='label'>Hours</div>
                </div>
                <div className='timerdisplay-watch'>:</div>
                <div className={'timerdisplay-watch '+ (isPassThreshold ? "warning" : "")}>
                    <div>{minutes}</div>
                    <div className='label'>Minutes</div>
                </div>
                <div className='timerdisplay-watch'>:</div>
                <div className={'timerdisplay-watch '+ (isPassThreshold ? "warning" : "")}>
                    <div>{seconds}</div>
                    <div className='label'>Seconds</div>
                </div>
            </div>
        )
    }
    adjustdisplay(seconds) {
        return {
            "hours" : 0,
            "minutes" : 0,
            "seconds" : 0
        }
    }

}

export default TimerDisplay;