import {} from 'react';
import logo from '../assets/Nav/Logo mare.svg'
import styles from '../css/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return (
    <footer className="footer">
      
      <div className={`${styles.caio} ${styles.card}`}>
        <p>Caio Hideki</p>
        <a href='https://www.linkedin.com/in/caio-hideki-cardenas-ishizu-24208a243/'>Linkedin</a>
        <a href='https://github.com/Gh0stE11'>GitHub</a>
      </div>
      <div className={`${styles.jorge} ${styles.card}`}>
        <p>Jorge Booz</p>
        <a href='https://www.linkedin.com/in/jorge-booz-4038a2213/'>Linkedin</a>
        <a href='https://github.com/jorgebooz'>GitHub</a>
      </div>
      <div className={`${styles.tibao} ${styles.card}`}>
        <p>Mateus Tibão</p>
        <a href='https://www.linkedin.com/in/mateustibao/'>Linkedin</a>
        <a href='https://github.com/MateusTibao'>GitHub</a>
      </div>
      <div className={`${styles.fiap} ${styles.card}`}>
        <a href="https://www.fiap.com.br/">Fiap</a>
        <a href="https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20">Oceans 20</a>
        <a href="https://www.g20.org/pt-br">G20 Brasil</a>
      </div>
      

      <div className={styles.baixo}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.direitos}>Maré Cheia, 2024</p>
        
        <div className={styles.icons}>
          <a href="link do projeto">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="post do projeto">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        </div>
    </footer>

    );
}
export default Footer;