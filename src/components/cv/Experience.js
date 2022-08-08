function Experience(props) {
  return (
    <div>
      <div className='experience__date'>{props.date}</div>

      <h3 className='experience__role'>{props.role}</h3>

      <p className='experience__location'>{props.location}</p>
      <p className='experience__description'>{props.description}</p>
    </div>
  );
}

export default Experience;
