import React from 'react';
import './styles.scss';
import { Form } from '../form/Form';
import logo from '../../asset/tv.png';
import { Link } from 'react-router-dom';
import { Icons } from '../../asset/Icons';

export const Header = ({background}) => {
  return (
    <header className=" header" style={{background: background}}>
      <div className='container inHeader'>
      <div>
        <Link className='logo' to="/">
          <img src={logo} alt="logo" />
          <span>MovieBox</span>
        </Link>
      </div>
      <Form />
      <div className="navigation">
        <Link className='sign' to="/">
          Sign in
        </Link>
        <div className='sandwich'><Icons type='sandwich' fill='white' /></div>
      </div>
      </div>
    </header>
  );
};
