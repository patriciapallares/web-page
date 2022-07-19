import PortfolioItem from './PortfolioItem';
import React from 'react';

import captura_ev_final_maq from '../images/ev_final_maq.png';
import captura_ev_inter_js from '../images/ev_inter_js.png';
import captura_ev_inter_react from '../images/ev_inter_react.png';
import captura_ev_final_js from '../images/ev_final_js.png';
import captura_ev_final_react from '../images/ev_final_react.png';

import maquetacion_team from '../images/maquetacion_team.png'
import javascript_team from '../images/javascript_team.png'
import react_team from '../images/react_team.png'


function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>

      <h3 className='portfolio__subtitle'>Proyectos individuales:</h3>

      <div className='portfolio__div'>
        <PortfolioItem
          captura={captura_ev_final_maq}
          title='Web corporativa Open Spaces - HTML / CSS'
          description=' Página web estática de acuerdo a un diseño facilitado.'
          description2=' Para resolverlo he usado Sass, flexbox y CSS Grid en distintas secciones y media queries para garantizar el diseño responsive. También usé animaciones y transiciones en distintos elementos '
          demolink='https://patriciapallares.github.io/adalab-maquetacion-evaluacion-final/'
          codelink='https://github.com/patriciapallares/adalab-maquetacion-evaluacion-final'
        />
        <PortfolioItem
          captura={captura_ev_inter_js}
          title='Juego de dados y apuestas - JavaScript'
          description='El programa genera un número (1-6). En el juego, el user empieza con 50 puntos para apostar. El user decide con qué número jugar y también la cantidad de puntos a apostar. Si el user acierta el número, gana el doble de lo que ha apostado. Si no, pierde lo apostado.
          El juego termina cuando el user llega a 0 o a 200 puntos. '
          

          demolink='https://patriciapallares.github.io/adalab-javascript-evaluacion-intermedia/'
          codelink=''
        />
        <PortfolioItem
          captura={captura_ev_final_js}
          title='Buscador de cócteles  - JavaScript'
          description='Aplicación web que contiene un listado de las bebidas y cócteles de todo el mundo y que permite des/marcar las bebidas como favoritas y guardarlas en Local Storage.'
          description2='Tras recibir las bebidas que coincidían en nombre a través de una API, he desarrollado las funciones necesarias para pintar los distintos listados y almacenar localmente los favoritos.'
          demolink='https://patriciapallares.github.io/adalab-javascript-evaluacion-final-patriciapallares/'
          codelink='https://github.com/patriciapallares/adalab-javascript-evaluacion-final-patriciapallares'
        />

        <PortfolioItem
          captura={captura_ev_inter_react}
          title='Filtro de frases de Friends - React'
          description='Aplicación que nos permite filtrar las frases de los personajes de la serie Friends, además de añadir nuestras propias frases'
          description2='Tras pintar las frases conseguidas a través de una API, he controlado los inputs del formulario con variables de estado y añadido los eventos necesarios para que funcione la app.'
          demolink='https://patriciapallares.github.io/adalab-react-evaluacion-intermedia/'
          codelink='https://github.com/patriciapallares/adalab-react-evaluacion-intermedia'
        />
        <PortfolioItem
          captura={captura_ev_final_react}
          title='Filtro de frases de Owen Wilson - React'
          description=' Página web con el listado de escenas de las películas donde el actor Owen Wilson dice "wow" y opciones de filtrado en base a la película, el año de lanzamiento y el director. También, al clicar sobre la escena, se redirige a una página a parte con más información sobre la película.'
          description2='Tras recibir 50 escenas a través de una API, he usado los componentes, variables de estado y hooks necesarios para dotar de funcionalidad a la página.'
          demolink='https://patriciapallares.github.io/adalab-react-evaluacion-final/'
          codelink='https://github.com/patriciapallares/adalab-react-evaluacion-final'
        />
      </div>

      <h3 className='portfolio__subtitle hidden'>Proyectos en equipo:</h3>

      <div className='portfolio__div hidden'>
        <PortfolioItem
          captura={maquetacion_team}
          title='Web presentación Equipo Molino - HTML / CSS'
          demolink='https://patriciapallares.github.io/adalab-maquetacion-team-project/'
          codelink='https://github.com/patriciapallares/adalab-maquetacion-team-project'
        />
        <PortfolioItem
          captura={javascript_team}
          title='Creación de tarjetas - Javascript'
          demolink='https://patriciapallares.github.io/adalab-javascript-team-project/'
          codelink='https://github.com/patriciapallares/adalab-javascript-team-project'
        />
        <PortfolioItem
          captura={react_team}
          title='Creación de tarjetas - React'
          demolink=''
          codelink='https://github.com/patriciapallares/adalab-react-team-project'
        />
      </div>
    </section>
  );
}

export default Portfolio;
