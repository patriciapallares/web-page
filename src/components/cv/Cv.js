import Education from './Education';
import Experience from './Experience';

import React from 'react';

function CV() {
  return (
    <section className='cv'>
      <h1 className='cv__title'>CV</h1>
      {/* considerar añadir links a los sitios donde he estudiado y trabjado */}
      <div className='cv__education'>
        <h2 className='cv__subtitle'>Formación</h2>
        <ul className='cv__list'>
          <li className='cv__list__li'>
            <Education
              date={'Feb. 2022 - May. 2022'}
              title={'Bootcamp desarrollo Front-End'}
              location={'Adalab'}
              description={
                'Maquetación: HTML5, CSS3, Fexbox, CSS Grid, diseño responsive, SASS. JavaScript (ES6) y servicios web (APIs) de terceros Control de versiones con Git. Creación de SPAs sencillas con React Conocimientos básicos de APIs y programación back: aplicaciones con Node JS, Express y SQL Manejo de Slack, Github, VS Code, Terminal y Zeplin. Experiencia en el desarrollo de proyectos usando filosofía Agile y marco de trabajo Scrum'
              }
            />
          </li>
          <li className='cv__list__li'>
            <Education
              date={'Nov. 2021'}
              title={'Curso Community Manager y gestión de RRSS'}
              location={'Ágil centros'}
              description={''}
            />
          </li>
          <li className='cv__list__li'>
            <Education
              date={'2021'}
              title={'L.2 Certificate in Business Administration'}
              location={'Bridgwater & Taunton College'}
              description={''}
            />
          </li>
          <li className='cv__list__li'>
            <Education
              date={'2013 - 2017'}
              title={'Grado en Marketing y Dirección Comercial'}
              location={'Universidad Europea de Valencia'}
              description={''}
            />
          </li>
        </ul>
      </div>

      <div className=''>
        <h2 className='cv__subtitle'>Experiencia</h2>
        <ul className='cv__list'>
          <li className='cv__list__li'>
            <Experience
              date={'Ene. 2020 - Sep. 2020'}
              role={'Receptionist & Reservations'}
              location={'Sanctum Int Serviced Apartments, Londres'}
              description={
                'Primer punto de contacto de huéspedes y personal empleado. Cargos VCC, ventas anticipadas y pre-autorizaciones para futuras reservas. Uso del software RoomMaster para gestionar las reservas'
              }
            />
          </li>
          <li className='cv__list__li'>
            <Experience
              date={'Sep. 2019 - Ene. 2020'}
              role={'Receptionist'}
              location={'Park Grand London Paddington, Londres'}
              description={
                'Resolución de consultas de huéspedes y quejas menores. Registro y dada de alta de los huéspedes en el software Opera'
              }
            />
          </li>
          <li className='cv__list__li'>
            <Experience
              date={'Ago. 2018 - Sep. 2019'}
              role={'Dependienta de tienda'}
              location={'Stradivarius Oxford Street, Londres'}
              description={
                'Atención al cliente -Stradi Basics- en un ambiente enérgico. Apoyo en otras funciones como caja o almacén. Online Specialist: A cargo de hacer, procesar y entregar pedidos online'
              }
            />
          </li>
          <li className='cv__list__li'>
            <Experience
              date={'Ene. 2017 - Jun. 2017'}
              role={'Asistente de marketing'}
              location={'Sarmat Investments Spain LTD, Valencia'}
              description={
                'Estrategia SEO. Creación de contenidos para RRSS. Mantenimiento y actualización de la web con nuevos artículos'
              }
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CV;
