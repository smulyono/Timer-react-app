import React, { Component } from 'react';
import 'assets/styles/TimerDisplay.css';

class TimerDisplay extends Component {
    constructor(props) {
        super(props);
        this.adjustdisplay = this.adjustdisplay.bind(this);
        this.showDoubleDigits = this.showDoubleDigits.bind(this);
    }

    render() {
        const {
            clockDisplay
        } = this.props;
        var {hours,minutes,seconds} = this.adjustdisplay(clockDisplay);

        return(
            <div className='timerdisplay-container'>
                <div className={'timerdisplay-watch'}>
                    <div>{hours}</div>
                    <div className='label'>Hours</div>
                </div>
                <div className='timerdisplay-watch'>:</div>
                <div className={'timerdisplay-watch'}>
                    <div>{minutes}</div>
                    <div className='label'>Minutes</div>
                </div>
                <div className='timerdisplay-watch'>:</div>
                <div className={'timerdisplay-watch'}>
                    <div>{seconds}</div>
                    <div className='label'>Seconds</div>
                </div>
            </div>
        )
    }
    adjustdisplay(seconds) {

        const minuteInSeconds = 60,
            hourInSeconds = 60 * minuteInSeconds;
        
        let hours = Math.floor(seconds / hourInSeconds);
        let carryover = seconds % hourInSeconds;

        let minutes = Math.floor(carryover / minuteInSeconds);
        carryover %= minuteInSeconds;

        seconds = carryover;

        return {
            "hours" : this.showDoubleDigits(hours),
            "minutes" : this.showDoubleDigits(minutes),
            "seconds" : this.showDoubleDigits(carryover)
        }
    }

    showDoubleDigits(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }
}

export default TimerDisplay;