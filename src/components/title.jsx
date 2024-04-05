import React from 'react'
import './title.css'

export const Title = (props) => {
  return (
    <div className='title'>
        <h4>{props.name}</h4>
        <h2>{props.title}</h2>
    </div>
  )
}
