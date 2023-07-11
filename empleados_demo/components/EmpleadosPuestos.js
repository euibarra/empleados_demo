// EmpleadosPuestos.js
import React from 'react';

const EmpleadosPuestos = () => {
  const empleadosPuestosKey = 'empleadosPuestos';

  // Función para obtener los empleados puestos almacenados en el local storage
  const obtenerEmpleadosPuestos = () => {
    const empleadosPuestosString = localStorage.getItem(empleadosPuestosKey);
    if (empleadosPuestosString) {
      return JSON.parse(empleadosPuestosString);
    }
    return [];
  };

  // Función para guardar un nuevo empleado puesto en el local storage
  const guardarEmpleadoPuesto = (empleadoPuesto) => {
    const empleadosPuestos = obtenerEmpleadosPuestos();
    empleadosPuestos.push(empleadoPuesto);
    localStorage.setItem(empleadosPuestosKey, JSON.stringify(empleadosPuestos));
  };

  // Función para eliminar un empleado puesto del local storage por su ID
  const eliminarEmpleadoPuesto = (id) => {
    let empleadosPuestos = obtenerEmpleadosPuestos();
    empleadosPuestos = empleadosPuestos.filter((empleadoPuesto) => empleadoPuesto.id !== id);
    localStorage.setItem(empleadosPuestosKey, JSON.stringify(empleadosPuestos));
  };

  // Función para obtener el total de empleados puestos almacenados
  const obtenerTotalEmpleadosPuestos = () => {
    const empleadosPuestos = obtenerEmpleadosPuestos();
    return empleadosPuestos.length;
  };

  return (
    <div>
      <h1>EmpleadosPuestos</h1>
      <p>Total de empleados puestos: {obtenerTotalEmpleadosPuestos()}</p>
      {/* Aquí se puede agregar contenido y lógica adicional del componente */}
    </div>
  );
};

export default EmpleadosPuestos;
