import React, { Component } from 'react';
import 'assets/styles/BottomControl.css';

class BottomControl extends Component {
    constructor(props){
        super(props);

        this.onRightButtonClick = this.onRightButtonClick.bind(this);
        this.onLeftButtonClick = this.onLeftButtonClick.bind(this);

    }

    onRightButtonClick(caption) {
        const activeChangeEvent = this.props.activeChangeEvent;
        activeChangeEvent(caption);
    }

    onLeftButtonClick(caption) {
        const activeChangeEvent = this.props.activeChangeEvent;
        activeChangeEvent(caption);
    }

    render() {
        const currentProcess = this.props.currentProcess;
        var leftButton = {
            caption : 'Reset',
            isactive: false
        };
        var rightButton = {
            caption : 'Start',
            isactive: true
        }

        if (currentProcess.toLowerCase() === "start") {
            rightButton.caption = 'Stop';
            leftButton.isactive = true;
        } else if (currentProcess.toLowerCase() === "stop") {
            rightButton.caption = 'Start';
            leftButton.isactive = true;
        } else if (currentProcess.toLowerCase() === "reset") {
            rightButton.caption = 'Start';
            leftButton.isactive = false;
        }

        return(
            <footer>
                <button 
                    className={ leftButton.isactive ? 'active' : '' }
                    onClick={() => this.onLeftButtonClick(leftButton.caption) } 
                    >
                    { leftButton.caption }
                </button>
                <button 
                    className={ rightButton.isactive ? 'active' : '' }
                    onClick={() => this.onRightButtonClick(rightButton.caption)}
                    >
                    { rightButton.caption } 
                </button>
            </footer>
        )
    }
}

export default BottomControl;