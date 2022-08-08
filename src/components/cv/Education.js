function Education(props) {
  return (
    <div>
      <div className='education__date'>{props.date}</div>

      <div className='education__info'>
        <h3 className='education__role'>{props.title}</h3>
        <p className='education__location'>{props.location}</p>
        <p className='education__description'>{props.description}</p>
      </div>
    </div>
  );
}

export default Education;
