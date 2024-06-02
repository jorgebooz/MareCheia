import {} from 'react';
import styles from '../css/Nav.module.css'
import logo from '../assets/Nav/Logo.svg'

function Nav() {

  return (
    <nav >
      <img src={logo} alt="logo" />
    </nav>
    );
}
export default Nav;