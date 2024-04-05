import React from 'react'
import './testimony.css'

export const Testimony = (props) => {
  return (
    <div className='testimony' key={props.id}>
        <div className="profile">
            <img src={props.image} alt="" />
            <div className="names">
                <h4>{props.name}</h4>
                <h6>{props.branch}</h6>
            </div>
        </div>
        <p>{props.review}</p>

    </div>
  )
}
