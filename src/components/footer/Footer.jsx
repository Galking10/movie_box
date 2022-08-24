import React from 'react';
import { Icons } from '../../asset/Icons';
import './styles.scss'

export const Footer = () => {
  return (
    <footer>
      <h3 className='heder_title'>Contact with me:</h3>
      <div className='social-links'>
        <a className='contact' href='https://t.me/galkin1807' target='_blank'><Icons type={'telegram'}/><dr/>
        write
        </a>
        <a  className='contact' href='https://www.linkedin.com/in/kirill-galkin-82015223a/' target='_blank'><Icons type={'linkedin'}/><dr/>
        go to
        </a>
        <div 
        className='contact'
        onClick={() =>navigator.clipboard.writeText('krllglkn1807@gmail.com')}>
        <Icons type={'email'}/> <br/>
        copy
        </div>
      </div>
    </footer>
  );
};
