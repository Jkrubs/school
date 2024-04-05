import React from 'react'
import './program.css'
import program1 from '../images/program-1.png'
import program2 from '../images/program-2.png'
import program3 from '../images/program-3.png'
import program_icon1 from '../images/program-icon-1.png'
import program_icon2 from '../images/program-icon-2.png'
import program_icon3 from '../images/program-icon-3.png'
export const Programms = () => {
  return (
    <div className='programms'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="icon">
                <img src={program_icon1} alt="" />
                <p>Post-graduate</p>
            </div>
        </div>
        <div className="program">
            <img src={program2 }alt="" />
            <div className="icon">
                <img src={program_icon2} alt="" />
                <p>Graduate</p>
            </div>
        </div>
        <div className="program">

            <img src={program3} alt="" />
            <div className="icon">
                <img src={program_icon3} alt="" />
                <p>Doctorate</p>
            </div>
        </div>



    </div>
  )
}
