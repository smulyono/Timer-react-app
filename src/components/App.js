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
        this.resetClockTimer = this.resetClockTimer.bind(this);

        this.timerCounter = undefined;
        
        this.state = {
            currentProcess : 'reset',
            displaytime: 0
        };
    }

    render() {
        return (
            <div className="App">
                <TimerDisplay 
                    clockDisplay={this.state.displaytime}
                    />
                <BottomControl
                    currentProcess={this.state.currentProcess}
                    activeChangeEvent={this.activeChangeEvent}
                    />
            </div>
        );
    }

    activeChangeEvent(buttonState){
        var currentProcess = this.state.currentProcess;
        
        switch (buttonState.toLowerCase()) {
            case 'start' : 
                this.startClockTimer();
            break;

            case 'stop' : 
                this.stopClockTimer();
            break;

            case 'reset' : 
                this.resetClockTimer();
            break;
            default : 
                this.stopClockTimer();
            break;
        }
        currentProcess = buttonState.toLowerCase();

        this.setState({
            currentProcess : currentProcess
        })
    }

    startClockTimer() {
        this.timerCounter = setTimeout(this.onClockTimer, 1000);
    }

    stopClockTimer() {
        if (this.timerCounter) {
            clearTimeout(this.timerCounter);
        }
    }

    resetClockTimer() {
        this.stopClockTimer();
        this.setState(
            {
                displaytime : 0
            }
        );
    }

    onClockTimer() {
        var currentTime = this.state.displaytime;
        var buttonState = this.state.currentProcess;

        currentTime++;

        this.stopClockTimer();
        if (buttonState.toLowerCase !== "stop") {
            this.startClockTimer();
        }

        this.setState( {
            displaytime : currentTime
        })
    }

}

export default App;
