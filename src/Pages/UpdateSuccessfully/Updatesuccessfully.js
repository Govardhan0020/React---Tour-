import React from 'react'
import '../Successfully Added/AddSuccess.css'
import { HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Updatesuccessfully = () => {

    return (
        <div>
          
            <div className='arrow'>
            </div>
            <div className='success'>
             <Link to='/locations' className='back'> <HiOutlineX size={45}/></Link>
                <div className="order"></div>
                
                <h2> Updated Details</h2> <h2>Added Successfully</h2>

            </div> 

        </div>
    )
}

export default Updatesuccessfully