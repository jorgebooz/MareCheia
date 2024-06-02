import {} from 'react';
import logo from '../assets/Nav/Logo mare.svg'

function Footer() {

  return (
    <footer className="footer">
      <div>
        <p>Caio Hideki</p>
        <a href='https://www.linkedin.com/in/caio-hideki-cardenas-ishizu-24208a243/'>Linkedin</a>
        <a href='https://github.com/Gh0stE11'>GitHub</a>
      </div>
      <div>
        <p>Jorge Booz</p>
        <a href='https://www.linkedin.com/in/jorge-booz-4038a2213/'>Linkedin</a>
        <a href='https://github.com/jorgebooz'>GitHub</a>
      </div>
      <div>
        <p>Jorge Booz</p>
        <a href='https://www.linkedin.com/in/mateustibao/'>Linkedin</a>
        <a href='https://github.com/MateusTibao'>GitHub</a>
      </div>
      <div>
        <a href="https://www.fiap.com.br/">Fiap</a>
        <a href="https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20">Oceans 20</a>
        <a href="https://www.g20.org/pt-br">G20 Brasil</a>
      </div>

      <img src={logo} alt="logo" />
      <h3>Maré Cheia, 2024</h3>
      
    </footer>

    );
}
export default Footer;