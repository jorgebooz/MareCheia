import {} from 'react';
import styles from '../css/Nav.module.css'
import logo from '../assets/Nav/Logo.svg'

function Nav() {

  return (
    <nav >
      <img src={logo} alt="logo" className='logo'/>
      <ul className={styles.links}>
        <li>Início</li>
        <li>Indicadores</li>
        <li>Como funciona</li>
        <li>Nosso time</li>
      </ul>
      <button className='botaoUm'>Participe</button>
    </nav>
    );
}
export default Nav;