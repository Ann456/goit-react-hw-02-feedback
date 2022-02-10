import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import React, {Component, Fragment} from 'react';

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
    Object.values(this.state).reduce((total, value) => total + value, 0)
  };

  countPositiveFeedbackPercentage = () => {
    Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const options = Object.keys(this.state);
    const statistics = Object.entries(this.state);
    
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.increment}
          />
        </Section>  

        <Section title="Statistics">
          <Statistics
            statistics={statistics}
            total={this.countTotalFeedback()}
            positivePersentage={this.countPositiveFeedbackPercentage()}
            />
        </Section>

      </Fragment>  
    )
  }
};

export default App;