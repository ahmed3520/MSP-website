import React from 'react'
import { Link } from 'react-router-dom'

const Committe = ({name, image, id, desc}) => {
  return (
      <>
      <Link to={"/"+id} className="or-a">
          <div className='org'>
              <div className='im-cont'>
                  <img src={image} alt={desc}/>
              </div>
              <div className=''>
                  <h3 className='or-name'>
                  {name}
                  </h3>
              </div>
          </div>
      </Link>
      </>
  )
}

export default Committe