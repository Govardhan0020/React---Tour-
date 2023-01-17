import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import video from '../../Assets/city.mp4'
const Home = () => {
  return (
    <div className='hero'>
{/* <img src="https://www.visitwestnorfolk.com/wp-content/uploads/2021/06/6045-24137-7915.jpg" alt="" /> */}
<video src={video} loop autoPlay muted ></video>
<div className='heading'>
<h1> Escape From Reality</h1>
<p className='p1'>Amazing Places On Earth</p>
<p className='p2'>Lets Explore The World</p>
 <div className='location'>
  <Link to='/locations'> View Locations</Link>
 </div>
</div>
    </div>
  )
}

export default Home