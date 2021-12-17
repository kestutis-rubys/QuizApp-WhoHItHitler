import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import useFetch from '../../hooks/useFetch';
import Button from '../Button/Button';
import { StartCountdown } from '../../pages/QuizPage/QuizPage';
import { Seconds } from '../../pages/QuizPage/QuizPage';
import { Points } from '../../pages/QuizPage/QuizPage';

// import css
import './Question.css';

const Question = () => {
  const [loading, data, error] = useFetch('questions', 2);
  const [answer, setAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(0);
  const { startCountdown, setStartCountdown } = useContext(StartCountdown);
  const { seconds, setSeconds } = useContext(Seconds);
  const { points, setPoints } = useContext(Points);
  const [buttonAction, setButtonAction] = useState(true);

  // -- side effects
  useEffect(() => {
    // generate random
    setRandomNumber(Math.floor(Math.random() * data.length));
  }, [data]);

  // check or selected answer is true or false
  const checkAnswer = (e) => {
    setButtonAction(false);
    const selectedQuestion = data[randomNumber].answers;
    const buttonValue = e.target.dataset.set;
    if (selectedQuestion[buttonValue].status) {
      setAnswer(true);
      setShowNextButton(true);
      setStartCountdown(false);
      if (points < 7) {
        setPoints(points + 1);
      } else {
        return navigate('/salut');
      }
    } else {
      setAnswer(false);
      setShowNextButton(true);
      setStartCountdown(false);
    }
  };

  // show new question
  const changeQuestion = () => {
    if (data.length - 1 !== 0) {
      data.splice(randomNumber, 1);
      setAnswer(null);
      setRandomNumber(Math.floor(Math.random() * data.length));
      setShowNextButton(false);
      setStartCountdown(true);
      setSeconds(10);
      setButtonAction(true);
    } else {
      return navigate('/defeated');
    }
  };

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div className='class-question-container'>
      <h4 className='class-question-container__title'>
        {data[randomNumber].title}
      </h4>
      <hr className='class-question-container__divider' />
      <div className='class-question-container__quiz-buttons'>
        {data[randomNumber].answers.map((answer, i) => (
          <Button
            btnClass='class-question-container__quiz-buttons-button'
            key={i}
            dataSet={i}
            text={answer.title}
            action={buttonAction && seconds && checkAnswer}
          />
        ))}
      </div>
      <div>
        {answer !== null ? (
          answer ? (
            <p>Good shot!</p>
          ) : (
            <p>Haha you missed!</p>
          )
        ) : seconds ? (
          <p>What is your answer?</p>
        ) : (
          <p>You fell asleep?</p>
        )}
        {(showNextButton && (
          <Button action={changeQuestion} text='Next question' />
        )) ||
        !startCountdown ? (
          <Button action={changeQuestion} text='Next question' />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Question;
