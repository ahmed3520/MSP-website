import React from 'react'
import { Link } from 'react-router-dom'

const Select = ({name, desc, img, href}) => {
  return (
    <>
        <div className='graydient'>
            <Link to={href} class="a-deco"> 
            <img src={img} alt="" className='im'/>
            <div className='oet'>
                {name}
            </div>
            <p className='p-deco'>
                {desc}
            </p>
            </Link>
        </div>
    </>
  )
}

export default Select