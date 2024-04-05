import React from 'react'
import Mydata from './testdata'
import './testimonials.css'
import { Testimony } from './testimony'

export const Testimonials = () => {
    const testimony=Mydata.map((item)=>{
        return <div className='comments'>
          <Testimony image={item.image} name={item.name} branch={item.branch} review={item.review}/>
        </div>
    })
  return (
    <div className='testimonials'>
        {testimony}
    </div>
  )
}
