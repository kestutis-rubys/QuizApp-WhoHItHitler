import React, { useContext } from 'react';
import { Points } from '../../pages/QuizPage/QuizPage';
// import css
import './PointsCounter.css';

const PointsCounter = () => {
  const { points } = useContext(Points);

  return <div className='class-points'>Points: {points}</div>;
};

export default PointsCounter;
