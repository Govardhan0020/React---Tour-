import React, { createContext, useState } from 'react'
import axios from 'axios';

export const Data = createContext();


const TourContext = ({children}) => {
    const [Apidata, setApidata] = useState(null);
    
    const [form, setForm] = useState({
            title: '', addresses: '', locationfee: '', description: ''
           })

            
    const Getdata = async () => {
        const response = await axios.get('http://localhost:7000/api/Tour')
        const data = response.data;
        setApidata(data)
    };

    // delete
    const Deletedata = async(_id)=>{
      await axios.delete(`http://localhost:7000/api/Tour/${_id}`)
      Getdata();
    }
    
// Update Request
const [updateform, setUpdateform] = useState({
  _id: '',
  title: '',
  addresses: '',
  description: '',
  locationfee: '',
  image:''
  
})

const toggleupdate = (item) => {
  setUpdateform({
    _id: item._id,
    title: item.title,
    addresses: item.addresses,
    description: item.description,
    locationfee:item.locationfee,
    image:item.image
  })

}
  return (
    <>
    <Data.Provider value={{Apidata,setApidata,Getdata,form, Getdata,setForm,Deletedata,updateform,setUpdateform,toggleupdate}}>
        {children}
    </Data.Provider>
    </>
  )
}

export default TourContext