import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import Question from '../../components/Question/Question';
import Timer from '../../components/Timer/Timer';
// import css
import './QuizPage.css';

export const StartCountdown = React.createContext();
export const Seconds = React.createContext();
export const Points = React.createContext();

const QuizPage = ({ img }) => {
  const [startCountdown, setStartCountdown] = useState(true);
  const [seconds, setSeconds] = useState(10);
  const [points, setPoints] = useState(0);
  return (
    <StartCountdown.Provider value={{ startCountdown, setStartCountdown }}>
      <Seconds.Provider value={{ seconds, setSeconds }}>
        <Points.Provider value={{ points, setPoints }}>
          <main className='class-main-container'>
            <div className='class-main-container__container'>
              <Timer />
              <img
                className='class-main-container__container-main-image'
                src={img}
                alt='main-img'
              />
              <PointsCounter />
            </div>
            <div className='class-main-container__question-container'>
              <Question />
            </div>
            <Link to='/truce'>
              <Button
                btnClass='class-main-container__button'
                text='Wave the white flag'
              />
            </Link>
          </main>
        </Points.Provider>
      </Seconds.Provider>
    </StartCountdown.Provider>
  );
};

export default QuizPage;
