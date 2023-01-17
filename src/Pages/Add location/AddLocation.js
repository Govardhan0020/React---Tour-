import React, { useContext, useState } from 'react'
import './Addlocation.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Data } from "../../Context/TourContext"
import { useNavigate } from 'react-router-dom';

const AddLocation = () => {
  /*---post request----*/
  const formdata = new FormData()
  const [image, setImg] = useState([])
  const userid = JSON.parse(localStorage.getItem("user"))
  const { form, setForm, updateform, setUpdateform } = useContext(Data)
  function UpdateFormData(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  const Navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem('marking'))

  const url = "http://localhost:7000/api/Tour"
  const uploadFile = (e) => {
    const file = e.target.files
    // formdata.append("image", file)
    setImg(file)

  }

  const createWorkout = async (e) => {
    e.preventDefault()
   




    try {
      for (let index = 0; index < image.length; index++) {
        formdata.append("image", image[index])
      }
      formdata.append("title", form.title)
      formdata.append("addresses", form.addresses)
      formdata.append("description", form.description)
      formdata.append("locationfee", form.locationfee)
      Navigate("/successfully")
      const res = await axios.post(url, formdata, {
        headers: {
          "Authorization": `Bearer ${userid.token}`
        }
      })

      console.log(res);

    } catch (err) {
      console.log(err);
    }
  }

  //  update data
  const upadateOnchange = (e) => {
    const { name, value } = e.target;
    setUpdateform({
      ...updateform,
      [name]: value,
    });
  }
  const mainurl = `http://localhost:7000/api/Tour/${id}`
  const reuploadFile = (e) => {
    const file = e.target.files[0];
    formdata.append("image", file);


  }

  const updateWorkout = async (e) => {
    e.preventDefault()
    formdata.append("title", updateform.title)
    formdata.append("addresses", updateform.addresses)
    formdata.append("description", updateform.description)
    formdata.append("locationfee", updateform.locationfee)
    Navigate("/updatesuccess")
  
    try {
      const res = await axios.patch(mainurl, formdata)
      console.log(res);

    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div>
      {console.log(updateform)}
      {
        !updateform._id &&

        (
          <div className='form'>
            <h1>Add Locations</h1>
            <form onSubmit={createWorkout} className='addLocation'>

              <div className='field-1'>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' value={form.title} onChange={UpdateFormData} required />
              </div>
              <div className='form-field-2'>
                <div className='f1'>
                  <label htmlFor="title">Location</label> <br />
                  <input type="text" name='addresses' placeholder='Search for Location' value={form.addresses} onChange={UpdateFormData} required />
                </div>

                <div className='f2'>
                  <label htmlFor="title">  Location price</label> <br />
                  <input type="text" placeholder=' ₹ 999' name='locationfee' value={form.locationfee} onChange={UpdateFormData} required />
                </div>

              </div>
              <div className='field-1'>
                <label htmlFor="title">Description</label>
                <textarea rows="4" cols="50" name='description' value={form.description} onChange={UpdateFormData} required></textarea>
              </div>
              <div className='form-field-3'>

                <input type="file" placeholder='choose images' name='image' accept='image/' value={form.image} onChange={uploadFile} required multiple />

              </div>
              <button className='submit'>Add Location</button>
              <Link to='/locations'>view all locations</Link>

            </form>
          </div>
        )
      }

      {
        updateform._id && (
          <div className='form'>
            <h1>Update Location</h1>
            <form onSubmit={updateWorkout} className='addLocation'>

              <div className='field-1'>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' value={updateform.title} onChange={upadateOnchange} />
              </div>
              <div className='form-field-2'>
                <div className='f1'>
                  <label htmlFor="title">Location</label> <br />
                  <input type="text" name='addresses' placeholder='Search for Location' value={updateform.addresses} onChange={upadateOnchange} />
                </div>

                <div className='f2'>
                  <label htmlFor="title">  Location price</label> <br />
                  <input type="text" placeholder=' ₹ 999' name='locationfee' value={updateform.locationfee} onChange={upadateOnchange} />
                </div>

              </div>
              <div className='field-1'>
                <label htmlFor="title">Description</label>
                <textarea rows="4" cols="50" name='description' value={updateform.description} onChange={upadateOnchange}></textarea>
              </div>
              <div className='form-field-3'>

                <input type="file" placeholder='choose images' name='image' accept='image/' value={form.image} onChange={reuploadFile} multiple />

              </div>
              <button className='submit'>Update Location</button>
              <Link to='/locations'>view all locations</Link>
            </form>
          </div>

        )
      }
    </div>
  )
}



export default AddLocation