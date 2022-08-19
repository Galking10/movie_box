import React from 'react';
import './styles.scss';
import { Form } from '../form/Form';
import logo from '../../asset/tv.png';
import { Link } from 'react-router-dom';
import { Icons } from '../../asset/Icons';

export const Header = () => {
  return (
    <header className="container header">
      <div >
        <Link className='logo' to="/">
          <img src={logo} alt="logo" />
          <span>MovieBox</span>
        </Link>
      </div>
      <Form />
      <div className="navigation">
        <Link to="/">
          <span>Sign in</span>
        </Link>
        <button className='sandwich'><Icons type='sandwich'/></button>
      </div>
    </header>
  );
};
