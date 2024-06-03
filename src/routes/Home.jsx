import React, { useState, useEffect } from 'react';
import pesca1 from '../assets/Home/pesca de arrasto.svg';
import pesca2 from '../assets/Home/fishing with net.svg'; // Adicione outras imagens que você deseja no carrossel
import pescador1 from '../assets/Home/fishing with net.svg';
import pescador2 from '../assets/Home/pesca de arrasto.svg'; // Adicione outras imagens que você deseja no carrossel
import styles from '../css/Home.module.css';

const Home = () => {
  const [currentPesca, setCurrentPesca] = useState(0);
  const [currentPescador, setCurrentPescador] = useState(0);

  const pescaImages = [pesca1, pesca2]; // Adicione outras imagens aqui
  const pescadorImages = [pescador1, pescador2]; // Adicione outras imagens aqui

  useEffect(() => {
    const intervalPesca = setInterval(() => {
      setCurrentPesca((prevCurrent) => (prevCurrent + 1) % pescaImages.length);
    }, 3000); // Troca de imagem a cada 3 segundos

    const intervalPescador = setInterval(() => {
      setCurrentPescador((prevCurrent) => (prevCurrent + 1) % pescadorImages.length);
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => {
      clearInterval(intervalPesca);
      clearInterval(intervalPescador);
    };
  }, [pescaImages.length, pescadorImages.length]);

  return (
    <>
      <section className={styles.sobrepesca}>
        <div className={styles.container}>
          <h1>Sobrepesca: uma Ameaça Real</h1>
          <p>A sobrepesca não é apenas um problema ecológico, mas uma ameaça direta à biodiversidade marinha e às comunidades costeiras que dependem dos oceanos para sua subsistência. Nosso projeto, Maré Cheia, é dedicado a combater essa crise através da inovação tecnológica e da transparência de dados.</p>
          <h3>Saiba mais dos riscos da sobrepresca</h3>
          <button className={`${styles.problemaBtn} botaoUm botaoProblema`}>O Problema</button>
        </div>
        <img src={pescaImages[currentPesca]} alt="pesca" className={styles.imgUm}/>
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
            <h3>Monitoramento</h3>
            <p>Com a integração de sensores avançados e análise de dados, nosso sistema oferece um monitoramento contínuo e preciso das condições oceânicas. As informações são atualizadas em tempo real, permitindo uma resposta rápida a situações críticas, como a sobrepesca excessiva, e ajudando a garantir a sustentabilidade dos recursos marinhos.</p>
          </div>
        </div>
        <h4>Veja como nossa solução funciona por conta própria</h4>
        <button className={`${styles.mareCheiaBtn} botaoUm botaoMareCheia`}>Maré Cheia</button>
      </section>

      <section className={styles.impacto}>
        <div className={styles.impactoContainer}>
          <h2>Impacto e Benefícios</h2>
          <p>Ao disponibilizar informações detalhadas sobre a saúde da fauna marinha, nosso sistema permite que a população e os governantes locais tomem decisões informadas para proteger os oceanos. Seja acompanhando projetos de revitalização, monitorando a saúde marinha ou alertando sobre a sobrepesca, nossa plataforma é uma ferramenta essencial para a sustentabilidade.</p>
          <h4>Benefícios de nosso projeto</h4>
          <button className={`${styles.resultadosBtn} botaoUm botaoResultados`}>Resultados</button>
        </div>
        <img src={pescadorImages[currentPescador]} alt="pesca" className={styles.imgDois}/>
      </section>

      <section className={styles.participe}>
        <h3>Pescando com responsabilidade, alimentando o futuro</h3>
        <h2>Seja Parte da Solução</h2>
        <p>Somos a Maré Cheia, e estamos aqui para apresentar os perigos da sobrepesca e suas consequências para sua região. Junte-se a nós nessa missão de proteger nossos oceanos e garantir um futuro sustentável para as próximas gerações.</p>
        <h4>Faça a diferença</h4>
        <button className={`${styles.participeBtn} botaoUm botaoParticipe`}>Participe</button>
      </section>
    </>
  );
};

export default Home;
