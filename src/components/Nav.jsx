import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Nav.module.css';
import logo from '../assets/Nav/Logo.svg';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul className={styles.links}>
          <Link to="/" className='navLink'>
            Home
          </Link>
          <Link to="/" className='navLink'>
            Indicadores
          </Link>
          <Link to="/" className='navLink'>
            Como funciona
          </Link>
          <Link to="/" className='navLink'>
            Nosso time
          </Link>
          <Link to="/login" className='navLink'>
            Login
          </Link>
      </ul>
      <button className={`${styles.botaoNav} botaoUm`}>Participe</button>
    </nav>
  );
}

export default Nav;
