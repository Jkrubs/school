import React from 'react'
import './about.css'
import about from '../images/about.png'
import icon from '../images/play-icon.png'

export const About = () => {
  return (
    <div className='about'>
        <div className="flyer">
            <img src={about} alt="" />
            <div className="play">
              <img src={icon} alt="" />
            </div>
        </div>
        <div className="text">
            <h5>ABOUT UNIVERSITY</h5>
            <h3>Nurturing Tomorrow's Leaders Today </h3>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs Our cutting-edge curriculum is designed to empower students with knowledge,skills and experiences needed to excel in the dynamic field of education  </p>
            <p>With a focus on innovation, hands on learning and personalised mentorship, our programs prepare aspiring educators to make a meaningful impact  in classrooms, schools and communities</p>
            <p> Whether you aspire to become a teacher, administrator, counsellor or educational leader, our diverse range,of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future education</p>
        </div>

    </div>
  )
}
