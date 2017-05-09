import React, { Component } from 'react';
import BottomControl from 'components/BottomControl';
import TimerDisplay from 'components/TimerDisplay';

import 'assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerDisplay />
        <BottomControl />
      </div>
    );
  }
}

export default App;
