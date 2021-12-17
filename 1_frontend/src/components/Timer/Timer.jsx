import React, { useState, useEffect, useContext } from 'react';
import { StartCountdown } from '../../pages/QuizPage/QuizPage';
import { Seconds } from '../../pages/QuizPage/QuizPage';
// import css
import './Times.css';

const Timer = () => {
  const [message, setMessage] = useState('');
  const { startCountdown, setStartCountdown } = useContext(StartCountdown);
  const { seconds, setSeconds } = useContext(Seconds);

  console.log(startCountdown);
  useEffect(() => {
    let interval;
    if (startCountdown && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      setStartCountdown(false);
      setMessage('Time is up');
    }
    return () => clearInterval(interval);
  }, [startCountdown, setStartCountdown, seconds, setSeconds]);
  return <div className='class-timer'>Countdown: {seconds || message} </div>;
};

export default Timer;
