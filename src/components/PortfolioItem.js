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
        <p className='portfolioitem__desc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className='portfolioitem__buttons'>
          <button className='button-28'>Demo</button>
          <button className='button-28'>Code</button>
        </div>
      </div>
    </article>
  );
}

export default PortfolioItem;

//
