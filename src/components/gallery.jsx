import React from 'react'
import './gallery.css'
import image1 from '../images/gallery-1.png'
import image2 from '../images/gallery-2.png'
import image3 from '../images/gallery-3.png'
import image4 from '../images/gallery-4.png'


export const Gallery = () => {
  return (
    <div className='all'>
    <div className='gallery'>
        <img src={image1} alt=''/>
        <img src={image2} alt='' />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
    </div>
    <button>See more here</button>
    </div>
  )
}
