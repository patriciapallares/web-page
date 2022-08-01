import React from 'react';

function PortfolioItem(props) {
  return (
    <article className='portfolioitem'>
      <div className='zoom'>
        <img
          className='portfolioitem__img'
          src={`${props.captura}`}
          alt='portfolio screenshot'
        />
      </div>

      <h2 className='portfolioitem__title'>{props.title}</h2>

      <div className='portfolioitem__div'>
        {/* <button className='portfolioitem__read'>+</button> */}

        <p className='portfolioitem__desc'>{props.description}</p>
        <p className='portfolioitem__desc'>{props.description2}</p>

        <div className='portfolioitem__buttons'>
          <a
            href={props.demolink}
            target='_blank'
            rel='noreferrer'
            className='button-28'
          >
            Demo
          </a>
          <a
            href={props.codelink}
            target='_blank'
            rel='noreferrer'
            className='button-28'
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default PortfolioItem;

//
