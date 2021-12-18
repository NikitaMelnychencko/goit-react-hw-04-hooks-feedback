import { useReducer } from 'react';
import FeedbackOptions from './components/Feedback/Feedback';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment good':
      return {
        ...state,
        good: state.good + 1,
      };
    case 'increment neutral':
      return {
        ...state,
        neutral: state.neutral + 1,
      };
    case 'increment bad':
      return {
        ...state,
        bad: state.bad + 1,
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateIncrement = feedback => {
    dispatch({ type: `increment ${feedback}` });
  };
  const countTotalFeedback = () => {
    const total = state.good + state.neutral + state.bad;
    return total;
  };
  const countPositiveFeedbackPercentage = total => {
    const positiveFeedback = (state.good / total) * 100;
    return positiveFeedback;
  };
  const totalValue = countTotalFeedback();
  const positiveFeedbackPercentage =
    countPositiveFeedbackPercentage(totalValue);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateIncrement}
        />
      </Section>
      <Section title="Statistics">
        {!totalValue ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalValue}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};
export default App;
