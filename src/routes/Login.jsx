import {} from 'react';
import styles from '../css/Login.module.css'

const Login = () =>{

  return (
    <section className={styles.login}>
    {/* {getUsuario && getSenha ? (
      <Home/>
    ) : ( */}
      <div className={styles.containerLogin}>
        <h1>Login</h1>
        <form  className={styles.optionsLogin}>
          <p className={styles.textLogin}>
            USUÁRIO:
            <input type="text" placeholder="Digite seu Usuário" className={styles.inputLogin} />
          </p>
          <p className={styles.textLogin}>
            SENHA:
            <input type="password" placeholder="Digite sua senha" className={styles.inputLogin} />
          </p>
          <button type="submit" className={`${styles.loginBtn} botaoUm`}>ENTRAR</button>
        </form>
        </div>
    {/* )} */}
  </section>
    )
}
export default Login;