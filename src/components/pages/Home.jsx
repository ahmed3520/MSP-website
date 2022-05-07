import React,{useEffect, useState} from 'react'
import Navbar from '../header/Navbar'
import Select from '../utils/Select'
import Event from '../utils/Event'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Committe from '../utils/Committe'
const Home = () => {
  const [data,setData] = useState()
  const [committes,setCommittes] = useState()
  const[error, setError] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    axios('http://127.0.0.1:8080/events/all',{
      method:'GET',
   
    })
  .then((response) => {
    setData(response.data)
    console.log('dol', response.data)
  }).catch((err)=>{
    console.log(err)
    setError(err)
  });
  axios('http://127.0.0.1:8080/committe/all',{
      method:'GET',
   
    })
  .then((response) => {
    setCommittes(response.data)
    console.log('dol', response.data)
  }).catch((err)=>{
    console.log(err)
    setError(err)
  });
  }, [])
  console.log('data', committes)
  return (
      <>
      <Navbar/>
      <div className="container">
        <div className="wrapper">
          <div className="hb">
          <img src="https://static.campuslabsengage.com/discovery/images/ratio.png" alt="" width={'100%'} height="auto"/>
         
          <div className="select">
            <Select name="Find Commite" desc="Join a new committe and utilize discussion, news posts, and group messaging." img="/groups_icon.svg" href="/commite"/>
            <Select name="Find Commite" desc="Join a new committe and utilize discussion, news posts, and group messaging." img="/events_icon.svg" href="/commite"/>
            <Select name="Find Commite" desc="Join a new committe and utilize discussion, news posts, and group messaging." img="/paths_icon.svg" href="/commite"/>

          </div>
          </div>
          <div className="events">
            <div className='h-title'>
            <span className='h-span' style={{margin:'0 0 20px'}}>
              <h2>
                Public Events
              </h2>
            </span>
            <Link to="/events">
              <button className='btn btn-outline-primary'>View More Events</button>
            </Link>
            </div>
            { data?
              data.map((result, index)=>{
                return <Event key={index}  image={result.image} name={result.name} desc={result.description} date={result.date} id={result._id} location={result.location}/>
              })
              :<></>
            }
          </div>
          <div className="committe">
          <div className='h-title'>
            <span className='h-span'>
              <h2>
                Committes
              </h2>
            </span>
            </div>
            { committes?
              data.map((result, index)=>{
                return <Committe key={index}  image={result.image} name={result.name} desc={result.description}  id={result._id}/>
              })
              :<></>
            }
          </div>

        </div>
      </div>
      </>
  )
}

export default Home