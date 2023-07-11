// Puestos.js
import React from 'react';

const Puestos = () => {
  const puestosKey = 'puestos';

  // Función para obtener los puestos almacenados en el local storage
  const obtenerPuestos = () => {
    const puestosString = localStorage.getItem(puestosKey);
    if (puestosString) {
      return JSON.parse(puestosString);
    }
    return [];
  };

  // Función para guardar un nuevo puesto en el local storage
  const guardarPuesto = (puesto) => {
    const puestos = obtenerPuestos();
    puestos.push(puesto);
    localStorage.setItem(puestosKey, JSON.stringify(puestos));
  };

  // Función para eliminar un puesto del local storage por su ID
  const eliminarPuesto = (id) => {
    let puestos = obtenerPuestos();
    puestos = puestos.filter((puesto) => puesto.id !== id);
    localStorage.setItem(puestosKey, JSON.stringify(puestos));
  };

  // Función para obtener el total de puestos almacenados
  const obtenerTotalPuestos = () => {
    const puestos = obtenerPuestos();
    return puestos.length;
  };

  return (
    <div>
      <h1>Puestos</h1>
      <p>Total de puestos: {obtenerTotalPuestos()}</p>
      {/* Aquí se puede agregar contenido y lógica adicional del componente */}
    </div>
  );
};

export default Puestos;