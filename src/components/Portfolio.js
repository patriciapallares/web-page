import PortfolioItem from './PortfolioItem';
import React from 'react';

import captura_ev_final_maq from '../images/ev_final_maq.png';
import captura_ev_inter_js from '../images/ev_inter_js.png';
import captura_ev_inter_react from '../images/ev_inter_react.png';
import captura_ev_final_js from '../images/ev_final_js.png';
import captura_ev_final_react from '../images/ev_final_react.png';

import maquetacion_team from '../images/maquetacion_team.png';
import javascript_team from '../images/javascript_team.png';
import react_team from '../images/react_team.png';

import { FormattedMessage } from 'react-intl';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>

      <h3 className='portfolio__subtitle hidden'>Proyectos individuales:</h3>

      <div className='portfolio__div'>
        <PortfolioItem
          captura={captura_ev_final_maq}
          title={
            <FormattedMessage
              id='portfolio.title1'
              defaultMessage=' '
            />
          }
          description={
            <FormattedMessage
              id='portfolio.text1_1'
              defaultMessage=' '
            />
          }
          description2={
            <FormattedMessage
              id='portfolio.text1_2'
              defaultMessage=' '
            />
          }
          demolink='https://patriciapallares.github.io/adalab-maquetacion-evaluacion-final/'
          codelink='https://github.com/patriciapallares/adalab-maquetacion-evaluacion-final'
        />
        <PortfolioItem
          captura={captura_ev_inter_js}
          title={
            <FormattedMessage
              id='portfolio.title2'
              defaultMessage=' '
            />
          }
          description={
            <FormattedMessage
              id='portfolio.text2_1'
              defaultMessage=' '
            />
          }
          demolink='https://patriciapallares.github.io/adalab-javascript-evaluacion-intermedia/'
          codelink=''
        />
        <PortfolioItem
          captura={captura_ev_final_js}
          title={
            <FormattedMessage
              id='portfolio.title3'
              defaultMessage=' '
            />
          }
          description={
            <FormattedMessage
              id='portfolio.text3_1'
              defaultMessage=' '
            />
          }
          description2={
            <FormattedMessage
              id='portfolio.text3_2'
              defaultMessage=' '
            />
          }
          demolink='https://patriciapallares.github.io/adalab-javascript-evaluacion-final-patriciapallares/'
          codelink='https://github.com/patriciapallares/adalab-javascript-evaluacion-final-patriciapallares'
        />

        <PortfolioItem
          captura={captura_ev_inter_react}
          title={
            <FormattedMessage
              id='portfolio.title4'
              defaultMessage=' '
            />
          }
          description={
            <FormattedMessage
              id='portfolio.text4_1'
              defaultMessage=' '
            />
          }
          description2={
            <FormattedMessage
              id='portfolio.text4_1'
              defaultMessage=' '
            />
          }
          demolink='https://patriciapallares.github.io/adalab-react-evaluacion-intermedia/'
          codelink='https://github.com/patriciapallares/adalab-react-evaluacion-intermedia'
        />
        <PortfolioItem
          captura={captura_ev_final_react}
          title={
            <FormattedMessage
              id='portfolio.title5'
              defaultMessage=' '
            />
          }
          description={
            <FormattedMessage
              id='portfolio.text5_1'
              defaultMessage=' '
            />
          }
          description2={
            <FormattedMessage
              id='portfolio.text5_2'
              defaultMessage=' '
            />
          }
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
