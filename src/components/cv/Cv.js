import Education from './Education';
import Experience from './Experience';

import React from 'react';

import { FormattedMessage } from 'react-intl';

function CV() {

  console.log(        <FormattedMessage id='cv.download' defaultMessage='Download CV' />
  );

  return (
    <section className='cv parent'>
      <h1 className='cv__title div1'>Curriculum Vitae</h1>
      {/* considerar añadir links a los sitios donde he estudiado y trabjado */}

      <a
        href='../../docs/Patricia_Pallares_CV.pdf'
        download='Patricia_Pallares_CV'
      >
        <FormattedMessage id='cv.download' defaultMessage='Download CV' />
      </a>

      <div className='cv__section div2'>
        <h2 className='cv__subtitle'>
          <FormattedMessage id='cv.education' defaultMessage='Education' />
        </h2>
        <ul className='cv__list'>
          <li className='cv__list__li'>
            <Education
              date={
                <FormattedMessage
                  id='ed1.date'
                  defaultMessage='Feb. 2022 - May. 2022'
                />
              }
              title={
                <FormattedMessage
                  id='ed1.title'
                  defaultMessage='Front-End development bootcamp'
                />
              }
              location={
                <FormattedMessage id='ed1.location' defaultMessage='Adalab' />
              }
              description={
                <FormattedMessage
                  id='ed1.description'
                  defaultMessage='HTML5, CSS3, Flexbox, CSS Grid, SASS, Bootstrap JavaScript (ES6) and third-party web services (APIs) Version control with Git. Building SPAs with React. Basic knowledge of APIs and back-end programming: applications with Node JS, Express and SQL. Slack, GitHub, VS Code, Gulp, Terminal, Linter, Zeplin. Agile software development (scrum/kanban)'
                />
              }
            />
          </li>
          <li className='cv__list__li'>
            <Education
              date={
                <FormattedMessage id='ed2.date' defaultMessage='Nov. 2021' />
              }
              title={
                <FormattedMessage
                  id='ed2.title'
                  defaultMessage='Community Manager - Course'
                />
              }
              location={
                <FormattedMessage
                  id='ed2.location'
                  defaultMessage='Ágil centros'
                />
              }
              description={
                <FormattedMessage id='ed2.description' defaultMessage=' ' />
              }
            />
          </li>
          <li className='cv__list__li'>
            <Education
              date={
                <FormattedMessage id='ed3.date' defaultMessage='2021' />
              }
              title={
                <FormattedMessage
                  id='ed3.title'
                  defaultMessage='L.2 Certificate in Business Administration'
                />
              }
              location={
                <FormattedMessage
                  id='ed3.location'
                  defaultMessage='Bridgwater & Taunton College'
                />
              }
              description={
                <FormattedMessage id='ed3.description' defaultMessage=' ' />
              }
            />
          </li>
          <li className='cv__list__li'>
          <Education
              date={
                <FormattedMessage id='ed4.date' defaultMessage='2013 - 2017' />
              }
              title={
                <FormattedMessage
                  id='ed4.title'
                  defaultMessage='Bachelors degree in Marketing'
                />
              }
              location={
                <FormattedMessage
                  id='ed4.location'
                  defaultMessage='Universidad Europea de Valencia'
                />
              }
              description={
                <FormattedMessage id='ed4.description' defaultMessage=' ' />
              }
            />
          </li>
        </ul>
      </div>

      <div className='cv__section div3'>
        <h2 className='cv__subtitle'>
          
          <FormattedMessage
          id='cv.experience'
          defaultMessage='Work Experience'/>
        </h2>
        <ul className='cv__list'>
          <li className='cv__list__li'>
            <Experience
              date={
                <FormattedMessage id='ex1.date' defaultMessage='Jan. 2020 - Sep. 2020' />
              }
              role={
                <FormattedMessage
                  id='ex1.role'
                  defaultMessage='Hotel receptionist & reservations'
                />
              }
              location={
                <FormattedMessage
                  id='ex1.location'
                  defaultMessage='Sanctum Int Serviced Apartments, London'
                />
              }
              description={
                <FormattedMessage id='ex1.description' defaultMessage=' ' />
              }
            />
          </li>
          <li className='cv__list__li'>
          <Experience
              date={
                <FormattedMessage id='ex2.date' defaultMessage='Sep. 2019 - Jan. 2020' />
              }
              role={
                <FormattedMessage
                  id='ex2.role'
                  defaultMessage='Hotel receptionist'
                />
              }
              location={
                <FormattedMessage
                  id='ex2.location'
                  defaultMessage='Park Grand London Paddington, London'
                />
              }
              description={
                <FormattedMessage id='ex2.description' defaultMessage=' ' />
              }
            />
          </li>
          <li className='cv__list__li'>
          <Experience
              date={
                <FormattedMessage id='ex3.date' defaultMessage='Aug. 2018 - Sep. 2019' />
              }
              role={
                <FormattedMessage
                  id='ex3.role'
                  defaultMessage='Sales Assistant'
                />
              }
              location={
                <FormattedMessage
                  id='ex3.location'
                  defaultMessage='Stradivarius Oxford Street, London'
                />
              }
              description={
                <FormattedMessage id='ex3.description' defaultMessage=' ' />
              }
            />
          </li>
          <li className='cv__list__li'>
          <Experience
              date={
                <FormattedMessage id='ex4.date' defaultMessage='Jan. 2017 - Jun. 2017' />
              }
              role={
                <FormattedMessage
                  id='ex4.role'
                  defaultMessage='Marketing Assistant'
                />
              }
              location={
                <FormattedMessage
                  id='ex4.location'
                  defaultMessage='Sarmat Investments Spain LTD, Valencia'
                />
              }
              description={
                <FormattedMessage id='ex4.description' defaultMessage=' ' />
              }
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CV;
