import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
// import css
import './DefeatedPage.css';

const DefeatedPage = ({ img }) => {
  return (
    <main className='class-main-container'>
      <img className='class-main-container__image' src={img} alt='' />
      <h1 className='class-main-container__title'>
        Haha - You lost. The world is mine.
      </h1>
      <Link to='/'>
        <Button text='Start again' />
      </Link>
    </main>
  );
};

export default DefeatedPage;
