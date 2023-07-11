// Personas.js
import React from 'react';

const Personas = () => {
  const personasKey = 'personas';

  // Función para obtener las personas desde el local storage
  const obtenerPersonas = () => {
    const personasString = localStorage.getItem(personasKey);
    if (personasString) {
      return JSON.parse(personasString);
    }
    return [];
  };

  // Función para guardar una persona en el local storage
  const guardarPersona = (persona) => {
    const personas = obtenerPersonas();
    personas.push(persona);
    localStorage.setItem(personasKey, JSON.stringify(personas));
  };

  // Función para eliminar una persona del local storage por su ID
  const eliminarPersona = (id) => {
    let personas = obtenerPersonas();
    personas = personas.filter((persona) => persona.id !== id);
    localStorage.setItem(personasKey, JSON.stringify(personas));
  };

  // Función para obtener el total de personas en el local storage
  const obtenerTotalPersonas = () => {
    const personas = obtenerPersonas();
    return personas.length;
  };

  return (
    <div>
      <h1>Personas</h1>
      <p>Total de personas: {obtenerTotalPersonas()}</p>
      {/* Aquí se puede agregar contenido y lógica adicional del componente */}
    </div>
  );
};

export default Personas;
