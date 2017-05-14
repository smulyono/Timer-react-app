import React, { Component } from 'react';
import 'assets/styles/TimerDisplay.css';

class TimerDisplay extends Component {
    render() {
        const {
            clockDisplay,
            isPassThreshold=false
        } = this.props;

        return(
            <div className='timerdisplay-container'>
                <div className={'timerdisplay-watch '+ (isPassThreshold ? "warning" : "")}>
                    {clockDisplay}
                </div>
            </div>
        )
    }
}

export default TimerDisplay;