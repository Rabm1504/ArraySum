import React, { useState, useEffect } from 'react';
import './App.css';

function generateRandomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);
}

function sumArray(numbers) {
  return numbers.reduce((acc, current) => acc + Number(current), 0);
}

function ArraySum() {
  const [autoArray, setAutoArray] = useState([]); // Array automático
  const [manualArray, setManualArray] = useState(''); // Array manual
  const [resultAuto, setResultAuto] = useState(0); // Resultado del array automático
  const [resultManual, setResultManual] = useState(null); // Resultado del array manual

  useEffect(() => {
    // Generamos el array automático al azar cuando el componente se monta
    const randomArray = generateRandomArray(5); // Cambia el tamaño del array si es necesario
    setAutoArray(randomArray);

    // Calculamos la suma del array automático
    const sum = sumArray(randomArray);
    setResultAuto(sum);
  }, []);

  const handleManualInputChange = (e) => {
    setManualArray(e.target.value);
  };

  const handleSumClick = () => {
    const numbers = manualArray.split(',').map((strNum) => strNum.trim());
    const sum = sumArray(numbers);
    setResultManual(sum);
  };

  return (
    <div className="container">
      <h2>Suma de Números</h2>
      <div>
        <h3>Array Automático:</h3>
        <p>{autoArray.join(', ')}</p>
        <p>La suma del array automático es: {resultAuto}</p>
      </div>
      <div className="manual-array">
        <h3>Array Manual:</h3>
        <p>Aquí puedes hacer tu propia suma de arrays</p>
        <label>Ingrese los números separados por comas:</label>
        <input
          type="text"
          value={manualArray}
          onChange={handleManualInputChange}
          placeholder="Ejemplo: 1, 2, 3"
        />
        <button onClick={handleSumClick}>Sumar</button>
        {resultManual !== null && (
          <p>La suma del array manual es: {resultManual}</p>
        )}
      </div>
    </div>
  );
}

export default ArraySum;
