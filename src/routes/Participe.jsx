import React from 'react';
import styles from '../css/Partipe.module.css';

const Participe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Recebmos sua solicitação em breve entraremos em contato");
  };

  return (

    
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Inscreva sua região</h1>
      <div className={styles.form_content}>
        <label htmlFor="username" className={styles.label_title}>Nome</label>
        <input 
          type="text" 
          id="username"
          placeholder="Nome"
          className={styles.input_field}
        />
      </div>
      <div className={styles.form_content}>  
        <label htmlFor="email" className={styles.label_title}>E-mail</label>
        <input 
          type="text" 
          id="email"
          placeholder="E-mail"
          className={styles.input_field}
        />
      </div>
      <div className={styles.form_content}>  
        <label htmlFor="cidade" className={styles.label_title}>Cidade</label>
        <input 
          type="text" 
          id="cidade"
          placeholder="Nome da sua cidade"
          className={styles.input_field}
        />
      </div>    
      <div className={styles.form_content} id="duvidas">
        <label htmlFor="mensagem" className={styles.label_title}></label>
        <textarea 
          id="mensagem" 
          name="mensagem"
          placeholder="comentários, dúvidas, dicas..."
          className={styles.textarea_field}
        ></textarea>
      </div>  
      <button type="submit" className="botaoUm">Enviar</button>  
    </form> 
  );
}

export default Participe;
