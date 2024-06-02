import React from 'react';
import pesca from '../assets/Home/pesca de arrasto.svg'
import styles from '../css/Home.module.css'

const Home = () => {
  return (
    <>
    <section className={styles.sobrepesca}>
      <div className={styles.container}>
        <h1>Sobrepesca: uma Ameaça Real</h1>
        <p>A sobrepesca não é apenas um problema ecológico, mas uma ameaça direta à biodiversidade marinha e às comunidades costeiras que dependem dos oceanos para sua subsistência. Nosso projeto, Maré Cheia, é dedicado a combater essa crise através da inovação tecnológica e da transparência de dados.</p>
        <h5>Saiba mais dos riscos da sobrepresca</h5>
        <button className={`${styles.problemaBtn} botaoUm`}>O Problema</button>
      </div>
      <img src={pesca} alt="pesca" className={styles.imgUm}/>
    </section>
    
    <section className={styles.inovacao}>
      <h2 className={styles.title}>Inovação e Tecnologia a Serviço dos Oceanos</h2>
      <div className={styles.containerInovacao}>
        <div className={styles.card}>
            <h3>Sustentabilidade</h3>
            <p>Nossa solução utiliza sensores em Arduino para monitorar parâmetros críticos do oceano, como pH, turbidez, oxigênio dissolvido e presença de peixe. Esses dados são essenciais para entender e preservar a saúde marinha, promovendo práticas de pesca sustentável e protegendo ecossistemas vulneráveis.</p>
        </div>
        <div className={styles.card}>
          <h3>Conscientização</h3>
          <p>Publicamos os dados coletados e analisados em nosso site, oferecendo dashboards interativos e textos explicativos. Isso permite que a população e os governantes locais se informem sobre o estado dos oceanos, incentivando a adoção de medidas de conservação e revitalização marinha.</p>
        </div>
        <div className={styles.card}>
          <h3>Conscientização</h3>
          <p>Publicamos os dados coletados e analisados em nosso site, oferecendo dashboards interativos e textos explicativos. Isso permite que a população e os governantes locais se informem sobre o estado dos oceanos, incentivando a adoção de medidas de conservação e revitalização marinha.</p>
        </div>
      </div>
      <h5>Veja como nossa solução funciona por conta própria</h5>
      <button className={`${styles.mareCheiaBtn} botaoUm`}>Maré Cheia</button>
    </section>
    </>
    
  );
};

export default Home;
