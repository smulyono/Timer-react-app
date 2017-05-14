import React, { Component } from 'react';
import BottomControl from 'components/BottomControl';
import TimerDisplay from 'components/TimerDisplay';

import 'assets/styles/App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.activeChangeEvent = this.activeChangeEvent.bind(this);
        this.onClockTimer = this.onClockTimer.bind(this);
        this.startClockTimer = this.startClockTimer.bind(this);
        this.stopClockTimer = this.stopClockTimer.bind(this);

        this.timerCounter = undefined;
        
        this.state = {
            currentProcess : 'stop',
            starttime: 10,
            displaytime: 10,
            progress: 100,
            isPassThreshold : false
        };
    }

    render() {
        return (
            <div className="App">
                <TimerDisplay 
                    progress={this.state.progress}
                    clockDisplay={this.state.displaytime}
                    isPassThreshold={this.state.isPassThreshold}
                    />
                <BottomControl
                    currentProcess={this.state.currentProcess}
                    activeChangeEvent={this.activeChangeEvent}
                    />
            </div>
        );
    }

    activeChangeEvent(buttonState){
        var currentTime = this.state.displaytime;
        switch (buttonState.toLowerCase()) {
            case 'start' : 
                if (currentTime <= 0) {
                    currentTime = this.state.starttime;
                }
                this.startClockTimer();
            break;

            case 'stop' : 
                this.stopClockTimer();
            break;

            default : 
                this.stopClockTimer();
            break;
        }
        this.setState(
            {
                currentProcess : buttonState,
                displaytime : currentTime
            }
        );
    }

    startClockTimer() {
        this.timerCounter = setTimeout(this.onClockTimer, 1000);
    }

    stopClockTimer() {
        if (this.timerCounter) {
            clearTimeout(this.timerCounter);
        }
    }

    onClockTimer() {
        var currentTime = this.state.displaytime;
        var buttonState = this.state.currentProcess;
        var isThreshold = false;
        currentTime--;
        if (currentTime === 0) {
            // time to stop
            isThreshold = false;
            buttonState = 'Stop';
        } else if (currentTime <= 5) {
            isThreshold = true;
        }

        this.stopClockTimer();
        if (buttonState !== "Stop") {
            this.startClockTimer();
        }

        this.setState(
            {
                currentProcess: buttonState,
                displaytime : currentTime,
                isPassThreshold: isThreshold
            }
        );
    }

}

export default App;
