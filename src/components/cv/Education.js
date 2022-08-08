function Education(props) {
  return (
    <div>
      <div className='cv__component__date'>{props.date}</div>

      <div className='cv__component__info'>
        <h3 className='cv__component__role'>{props.title}</h3>
        <p className='cv__component__location'>{props.location}</p>
        <p className='cv__component__description'>{props.description}</p>
      </div>
    </div>
  );
}

export default Education;
