import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Login.module.css';
const Login = () => {
  const usuarioRef = useRef();
  const senhaRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuarioRef.current.value === 'usuario' && senhaRef.current.value === '12345') {
      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

      sessionStorage.setItem('usuario', 'Admin');
      sessionStorage.setItem('senha', token);
      navigate('/');
    } else {
      alert('Usuário e senha inválidos!!!');
    }
  };

  return (
    <section className={styles.login}>
      <div className={styles.containerLogin}>
        <h1>Login</h1>
        <form className={styles.optionsLogin} onSubmit={handleSubmit}>
          <p className={styles.textLogin}>
            USUÁRIO:
            <input type="text" placeholder="Digite seu Usuário" className={styles.inputLogin} ref={usuarioRef} />
          </p>
          <p className={styles.textLogin}>
            SENHA:
            <input type="password" placeholder="Digite sua senha" className={styles.inputLogin} ref={senhaRef} />
          </p>
          <button type="submit" className={`${styles.loginBtn} botaoUm`}>ENTRAR</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
