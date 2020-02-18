import React, { Component } from 'react';
import moment, { duration } from 'moment';



class Countdown extends Component {
    state = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0
    };

  render() {
    return (
      <div className="countdown">
        {}

      </div>
    );
  }
}

export default Countdown;