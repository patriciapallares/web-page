function Experience(props) {
  return (
    <div>
      <div className='experience__date'>{props.date}</div>

      <div className='experience__info'>
        <h3 className='experience__role'>{props.role}</h3>
        <p className='experience__location'>{props.location}</p>
        <p className='experience__description'>{props.description}</p>
      </div>
    </div>
  );
}

export default Experience;
