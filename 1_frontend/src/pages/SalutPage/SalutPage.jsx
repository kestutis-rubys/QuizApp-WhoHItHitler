import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
// import css
import './SalutPage.css';

const SalutPage = ({ img }) => {
  return (
    <main className='class-main-container'>
      <img className='class-main-container__image' src={img} alt='' />
      <h1>Salut mate! You won.</h1>
      <Link to='/'>
        <Button text='Start again' />
      </Link>
    </main>
  );
};

export default SalutPage;
