import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({id, image, name, desc, date, location}) => {
  return (
    <div className='ev'>
        <Link to={'/'+id}>
            <div className='cont'>
                <img src={image} alt={desc} className="card-imge"/>
                {/*TODO name */}
            <div className='na'>
                    <span className='card-s'>
                    <h3 className='card-h3'>
                    {name}
                </h3>
                    </span>
              </div>
               
                    {/*@TODO date */}
                    <div className='bo'>
                    <div className='ic'>
                    <svg viewBox="0 0 24 24" className='svg-date'>
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z">
                        </path>
                    </svg>
                    {date}
                    </div>
                    {/*@TODO location */}
                    <div className='ic'>
                    <svg className='svg-date' viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">

                    </path>
                    </svg>
                    <p>
                    {location}
                    </p>
                    </div>
                    </div>
            
            </div> 
        </Link>
    </div>
  )
}

export default Event