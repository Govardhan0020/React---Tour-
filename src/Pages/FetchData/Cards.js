import React, { useEffect, useContext } from 'react'
import './Cards.css'
import { Data } from '../../Context/TourContext';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext'


const Cards = () => {
    const Navigate = useNavigate()
    // const { user } = useAuthContext();

    // get request
    const { Apidata, Getdata } = useContext(Data);

    useEffect(() => {
        Getdata();
    },[])
    return (
        <div className='maincards'>
             
            { 
                Apidata && Apidata.map((item, i) => {
                    const { title,addresses,description,imagesd:{image}}=item
                    console.log(item,"hi")
                    return (
                        <div key={i} className='card'>
                           
                            <img src={image[1]} alt='hi'/>
                           
                            <div className='details-card'>
                             <h3>{title.substring(0,18)}...</h3>
                             <p className='desc'>{description.substring(0,95)}...</p>
                             <div className='loc'>
                            <p> <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png"  alt="" />{addresses.substring(0,18)} ...</p>
                            </div>
                            <button className='btn' onClick={() => {
                                localStorage.setItem('marking', JSON.stringify(item._id))
                               
                                Navigate('/viewmore')
                              
                            }}>View More</button>
                        
                          </div>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards