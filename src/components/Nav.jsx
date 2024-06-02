import {} from 'react';
import styles from '../css/Nav.module.css'
import logo from '../assets/Nav/Logo.svg'

function Nav() {

  return (
    <nav >
      <img src={logo} alt="logo" className='logo'/>
      <ul className={styles.links}>
        <a className='navLink'>Início</a>
        <a className='navLink'>Indicadores</a>
        <a className='navLink'>Como funciona</a>
        <a className='navLink'>Nosso time</a>
      </ul>
      <button className='botaoUm'>Participe</button>
    </nav>
    );
}
export default Nav;