import {} from 'react';

const Login = () =>{

  return (
    <section className="login">
    {/* {getUsuario && getSenha ? (
      <Home/>
    ) : ( */}
      <div className='containerLogin'>
        <h1>Login</h1>
        <form  className='optionsLogin'>
          <p className='textLogin'>
            USUÁRIO:
            <input type="text" placeholder="Digite seu Usuário" className='inputLogin' />
          </p>
          <p className='textLogin'>
            SENHA:
            <input type="password" placeholder="Digite sua senha" className='inputLogin' />
          </p>
          <button type="submit">ENTRAR</button>
        </form>
        </div>
    {/* )} */}
  </section>
    )
}
export default Login;