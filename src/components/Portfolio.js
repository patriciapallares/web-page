import PortfolioItem from './PortfolioItem';
import React from 'react';


import captura_ev_final_maq from '../images/ev_final_maq.png'
import captura_ev_inter_js from '../images/ev_inter_js.png'
import captura_ev_inter_react from '../images/ev_inter_react.png'
import captura_ev_final_js from '../images/ev_final_js.png'
import captura_ev_final_react from '../images/ev_final_react.png'



function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>

      <h3 className='portfolio__subtitle'>Proyectos individuales:</h3>

      <div className='portfolio__div'>
        <PortfolioItem captura= {captura_ev_final_maq} title='Web corporativa Open Spaces - HTML / CSS'/>
        <PortfolioItem captura= {captura_ev_inter_js} title='Juego de dados y apuestas - JavaScript'/>
        <PortfolioItem captura= {captura_ev_final_js} title='Buscador de cócteles  - JavaScript'/>
        <PortfolioItem captura= {captura_ev_inter_react} title='Filtro de frases de Friends - React '/>
        <PortfolioItem captura= {captura_ev_final_react} title='Filtro de frases de Owen Wilson - React '/>
      </div>

      <h3 className='portfolio__subtitle'>Proyectos en equipo:</h3>

      <div className='portfolio__div'>
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>

    </section>
  );
}

export default Portfolio;
