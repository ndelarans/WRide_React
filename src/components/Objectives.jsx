import React from 'react';

const stateStyles = {
  Critico: { color: 'red' },
  Aceptable: { color: 'orange' },
  Exitoso: { color: 'green' }
};

const objetivos = [
  { codigo: 1000, objetivo: 'Compra de Servidores', meta: '$500,000', avance: '$250,000', cumplimiento: '50%' },
  { codigo: 1001, objetivo: 'Desarrollo de Aplicación Móvil', meta: '$600,000', avance: '$200,000', cumplimiento: '33%' },
  { codigo: 1002, objetivo: 'Contratación de Personal de Soporte', meta: '$700,000', avance: '$400,000', cumplimiento: '57%' },
  { codigo: 1003, objetivo: 'Implementación de Funcionalidades Adicionales', meta: '$800,000', avance: '$500,000', cumplimiento: '62%' },
  { codigo: 1004, objetivo: 'Optimización de Infraestructura', meta: '$900,000', avance: '$800,000', cumplimiento: '89%' }
];

const getEstado = (cumplimiento) => {
  const porcentaje = parseInt(cumplimiento);
  if (porcentaje <= 35) return 'Critico';
  if (porcentaje <= 75) return 'Aceptable';
  return 'Exitoso';
};

function Objectives() {
  return (
    <section className="objectives">
      <h2>Objetivos Estratégicos</h2>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Objetivo</th>
            <th>Meta</th>
            <th>Avance</th>
            <th>Cumplimiento</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {objetivos.map((obj) => {
            const estado = getEstado(obj.cumplimiento);
            return (
              <tr key={obj.codigo}>
                <td>{obj.codigo}</td>
                <td>{obj.objetivo}</td>
                <td>{obj.meta}</td>
                <td>{obj.avance}</td>
                <td>{obj.cumplimiento}</td>
                <td style={stateStyles[estado]}>{estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Objectives;
