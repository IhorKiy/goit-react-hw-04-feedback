import { useEffect, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePersent, setPositivePercent] = useState(0);

  const handleGood = () => {
        setGood((prev) => prev + 1);
  };

  const handleNeutral = () => {
       setNeutral((prev) => prev + 1);
  };

  const handleBad =() => {
      setBad((prev) => prev + 1);
  };


  useEffect(() => {
setTotal(good + neutral + bad);
}, [good, neutral, bad]);


useEffect(() => {
setPositivePercent(((good / total) * 100).toFixed(0));
}, [good, total]);


  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Plese, leave feadbeack">
        <FeedbackOptions
          handleGood={handleGood}
          handleNeutral={handleNeutral}
          handleBad={handleBad}
        />
      </Section>
      <Section title="Statistics">
        {!good && !neutral && !bad ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercent={positivePersent}
          />
        )}
      </Section>
    </div>
  );
};
