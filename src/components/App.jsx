import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import React, {Component} from 'react';

class App extends Component {
  state = {
    good: 0,      
    neutral: 0,
    bad: 0,
  };

  increment = vote => {
    this.setState(prevState => ({ [vote]: prevState[vote] + 1 }));
  };

  countTotalFeedback = () => {
    Object.values(this.state).reduce((total, value) => (total + value), 0)
  };

  render() {
    const options = Object.keys(this.state);
    const statistics = Object.entries(this.state);
    
    return (
      <>
        
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.increment}
        />

        <Statistics
          statistics={statistics}
          total={this.countTotalFeedback()}
        />

      </>  
    )
  }
}
export default App;