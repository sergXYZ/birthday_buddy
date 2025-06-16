import React from 'react'

const Person = ({ image, name, age }) => {
  return (
    <article>
      <img src={image} alt={name} style={{ width: '10rem' }}></img>
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}

export default Person
