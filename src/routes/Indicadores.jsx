import React, { useEffect, useState } from 'react';
import styles from '../css/Indicadores.module.css';

function Indicadores() {
  const [countryName, setCountryName] = useState('');
  const [limit, setLimit] = useState(5); // Limite padrão de resultados
  const [data, setData] = useState([]);

  useEffect(() => {
    if (countryName!== '' && countryName!== 'Brazil') { // Corrigido para verificar se o país não está vazio e não é 'Brazil'
      fetch(`https://api.openaq.com/v1/measurements?country=${countryName}&limit=${limit}`)
     .then(response => response.json())
     .then(data => {
          setData(data.results); // Corrigido para acessar a propriedade correta do objeto retornado pela API
        })
     .catch(error => console.error('Erro ao buscar dados:', error));
    }
  }, [countryName, limit]);

  const handleInputChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(Number(event.target.value));
  };

  if (data.length === 0 ||!data[0]) { // Verifica se há dados carregados
    return <div className={styles.loading}>Carregando dados...</div>;
  }

  return (
    <>
      <h2>Dados de Poluentes Atmosféricos</h2>
      <label htmlFor="country">País:</label>
      <input id="country" type="text" value={countryName} onChange={handleInputChange} />
      <br />
      <label htmlFor="limit">Limite de Resultados:</label>
      <input id="limit" type="number" min="1" max="100" value={limit} onChange={handleLimitChange} />
      <br /><br />
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Local: {item.location.name}, Valor: {item.value} ppm
          </li>
        ))}
      </ul>
    </>
  );
}

export default Indicadores;
