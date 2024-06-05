import React from 'react';
import styles from '../css/Indicadores.module.css';
import indicadores from '../assets/Indicadores/indicadores.png'

function Indicadores() {
  return (
    <>
    <section className={styles.indicadores}>
        <div className={`${styles.ph} ${styles.container}`}>
            <h3>pH da Água</h3>
            <img src={indicadores} alt="indicadores" />
            
        </div>
        <div className={`${styles.turbidez} ${styles.container}`}>
            <h3>Turbidez</h3>
            <img src={indicadores} alt="indicadores" />
        </div>
        <div className={`${styles.oxigenio} ${styles.container}`}>
            <h3>Oxigênio dissolvido</h3>
            <img src={indicadores} alt="indicadores" />
        </div>
        <div className={`${styles.presenca} ${styles.container}`}>
            <h3>Presença de peixes</h3>
            <img src={indicadores} alt="indicadores" />
        </div>
    </section>
    </>
  );
}

export default Indicadores;