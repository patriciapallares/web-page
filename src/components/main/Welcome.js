import React from 'react';

import profilePic from '../../images/fptp.jpg';
import Role from './Role';

import { FormattedMessage} from 'react-intl';

function Welcome() {
  return (
    <article className='welcome'>
      <div className='welcome__imgdiv div1'>
        <img
          src={profilePic}
          alt='foto Patricia'
          title='foto Patricia'
          className='welcome__imgdiv__photo'
        />
      </div>
      <p className='welcome__title div2'> &#60; patricia &#62; </p>

      <p className='welcome__pa div3'> 

        <FormattedMessage 
        id="app.welcome" 
        defaultMessage="Hello hello! Patricia here! Learn more about me on this page. Shall we connect?"
        /> <span>&#128075;</span> 
      </p> 
{/* Welcome user! Mi primer proyecto personal: mi página de portfolio.
Espero que te entretenga un poco lo que veas y que te animes a darme
feedback :D */}
      <Role />

    </article>
  );
}

export default Welcome;
