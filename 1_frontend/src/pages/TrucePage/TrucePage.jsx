import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
// import css
import './TrucePage.css';

const TrucePage = ({ img }) => {
  return (
    <main className='class-main-container'>
      <img className='class-main-container__image' src={img} alt='' />
      <h1>Haha - Coward!</h1>
      <Link to='/'>
        <Button text='Start again' />
      </Link>
    </main>
  );
};

export default TrucePage;
