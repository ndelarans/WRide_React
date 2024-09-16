import React, { useEffect, useRef } from 'react';

const diagnosisData = [
  {
    type: "Debilidades",
    items: [
      "1. Debilidad 1:",
      "   Cobertura geográfica limitada en las primeras fases de lanzamiento.",
      "2. Debilidad 2:",
      "   Dependencia de la tecnología para la verificación de conductoras y seguimiento en tiempo real.",
      "3. Debilidad 3:",
      "   Posible resistencia de usuarios acostumbrados a servicios de transporte tradicionales.",
    ],
  },
  {
    type: "Oportunidades",
    items: [
      "1. Oportunidad 1:",
      "   Creciente demanda de servicios de transporte seguro y específico para mujeres.",
      "2. Oportunidad 2:",
      "   Expansión a nuevas ciudades y regiones con alto interés en soluciones de transporte seguro.",
      "3. Oportunidad 3:",
      "   Posibilidad de alianzas con organizaciones y empresas que promuevan la seguridad y bienestar de mujeres.",
    ],
  },
  {
    type: "Fortalezas",
    items: [
      "1. Fortaleza 1:",
      "   Enfoque especializado en la seguridad y comodidad de las usuarias.",
      "2. Fortaleza 2:",
      "   Conductoras verificadas y capacitadas para garantizar un entorno seguro.",
      "3. Fortaleza 3:",
      "   Sistema de seguimiento en tiempo real y soporte directo para resolver problemas rápidamente.",
    ],
  },
  {
    type: "Amenazas",
    items: [
      "1. Amenaza 1:",
      "   Competencia de servicios de transporte existentes que puedan introducir características similares.",
      "2. Amenaza 2:",
      "   Desafíos en la gestión de la seguridad y privacidad de los datos personales de las usuarias.",
      "3. Amenaza 3:",
      "   Posibles problemas logísticos y técnicos en la implementación y escalabilidad del servicio.",
    ],
  },
];


const Diagnosis = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      if (boxesRef.current) {
        boxesRef.current.forEach((box) => {
          if (box) observer.unobserve(box);
        });
      }
    };
  }, []);

  return (
    <section className="diagnosis">
      {diagnosisData.map((category, index) => (
        <div
          key={category.type}
          ref={(el) => (boxesRef.current[index] = el)}
          className="box fade-in"
        >
          <h3 className="text-xl font-bold mb-2">{category.type}</h3>
          <ul>
            {category.items.map((item, i) => (
              <li key={i} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Diagnosis;
