import React, { Component } from 'react';
import 'assets/styles/BottomControl.css';

class BottomControl extends Component {
    contructor(){

    }
    render() {
        var leftButton = {
            caption : 'Reset',
            isactive: false
        };
        var rightButton = {
            caption : 'Start',
            isactive: true
        }
        
        return(
            <footer>
                <button className={ leftButton.isactive ? 'active' : '' }>
                    { leftButton.caption }
                </button>
                <button className={ rightButton.isactive ? 'active' : '' }>
                    { rightButton.caption } 
                </button>
            </footer>
        )
    }
}

export default BottomControl;