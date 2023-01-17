import React from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './Popup.css'
const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
        <div className='pop'>
      <div className="close">
        <Link to='/locations'>
        <HiOutlineX
          size={40}
          style={{ color:"white"}}
          className="closebtn"
          onClick={() => props.setTrigger(false)}
        ></HiOutlineX>
        </Link>
        {props.children}
      </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
