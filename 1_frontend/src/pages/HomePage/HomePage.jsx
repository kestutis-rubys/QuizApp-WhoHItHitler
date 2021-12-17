import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
// import css
import './HomePage.css';

const HomePage = ({ img }) => {
  return (
    <main className='class-main-container'>
      <img
        className='class-main-container__main-image'
        src={img}
        alt='main-img'
      />
      <h1 className='class-main-container__main-title'>Who hit Hitler?</h1>
      <h2 className='class-main-container__sub-title'>
        Win the game - win the war
      </h2>
      <p className='class-main-container__note'>
        If you want to win you have to get at least 8 correct answers
      </p>
      <Link to='/quiz'>
        <Button text='Weapons READY' />
      </Link>
    </main>
  );
};

export default HomePage;
