import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Newmap from '../../Components/Newmap/Newmap'
import './ViewMore.css'
import { Data } from '../../Context/TourContext'
import Reviews from '../Reviews/Reviews'
import { format } from 'timeago.js'
import { useAuthContext } from '../../Hooks/useAuthContext'
import axios from 'axios'
import { DynamicStar } from "react-dynamic-star"
import Editform from "../EditForm/Editforrm";
import Slider from '../Slider/Slider'

// import FormReview from '../ReviewForm/FormReview'

// const ViewMore = () => {
//   const [edit,setEdit] = useState(false)

//   const { user } = useAuthContext();

//   const { toggleupdate } = useContext(Data)



//   // popup

//   const [viewData, setViewData] = useState([])
//   const [single,setSingle] = useState([])


//   const viewlocationDetails = async () => {
//     const id = JSON.parse(localStorage.getItem('marking'))
//     const response = await fetch(`http://localhost:7000/api/Tour/${id}`)
//     console.log(response);
//     const singledata = await response.json()
//     setViewData([singledata.TouristData])
//     setSingle(singledata.locationiddata)
//     console.log(id)



//   }
//   //Delete Data
//   const { Deletedata, Getdata } = useContext(Data)
//   const url = `http://localhost:7000/api/Tour`


//   useEffect(() => {
//     Getdata()
//   }, [url])

//   const Navigate = useNavigate()

//   useEffect(() => {
//     viewlocationDetails()

//   }, [])
//    const [reviewdata,setReviewData]=useState([])

//   const createReview = async () => {
//     const response = await fetch("http://localhost:7000/api/Reviews")
//     const data = await response.json()
//     console.log(data);
//     setReviewData(data)
// }
// useEffect(() => {
//     createReview()
// }, [])

//   return (
//     <>
//       <div className='main_view'>

//         {
//           viewData.map((item, i) => {
//             const { location: { coordinate: [lan, lat] } } = item;

//             return (
//               <div key={i} className='viewMore'>
//                 <div className='img_content'>
//                   <div className='img_div'>
//                     <img src={item.image} alt='' />
//                   </div>
//                   <div className='content_div'>
//                     <h1>{item.title}</h1>

//                     <div className='loc'>
//                       <p> <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" />{item.addresses}

//                         &nbsp; &nbsp; <span> <Link to='/locations'> see map </Link></span>

//                       </p>
//                     </div>

//                     <p className='description'>{item.description}</p>
//                     <p>From<br /> <span className='price'> ₹{item.locationfee}</span></p>

//                     { id.user===user ? <div className='Crud_buttons'>

//                       <button className='Update' onClick={() => {
//                         toggleupdate(item)
//                         Navigate("/addlocation")
//                       }}>Edit</button>
//                       <button className='Delete' onClick={() => {
//                         Deletedata(item._id)
//                         Navigate('/locations')
//                       }

//                       }>Delete</button>

//                     </div> : ""}


//                     <p>Submitted By {user.email.substring(0, 5)}</p>
//                     {format(item.createdAt)}
//                   </div>
//                   <Link to='/locations'> View all locations</Link>
//                 </div>

//                 <div className='viewmap'>
//                   <Newmap className="Newmap" lon={lan} latt={lat} />
//                   <div className='reviews'>
//                     <Reviews />
//                   </div>
//               
//                 </div>
//               </div>

//             )
//           })
//         }





//       </div>
//       {

//                 }
//     </>

//   )
// }

// export default ViewMore

// import axio


const ViewMore = () => {

  const { user } = useAuthContext()

  const [edit, setEdit] = useState(false)
  const { toggleupdate } = useContext(Data)

  const Navigate = useNavigate()
  const userid = JSON.parse(localStorage.getItem("user"))

  const [viewdata, setViewdata] = useState([]);
  const [single, setSingle] = useState([])

  const View = async () => {
    const id = JSON.parse(localStorage.getItem("marking"))
    const res = await fetch(`http://localhost:7000/api/Tour/${id}`)
    const singledata = await res.json()
    console.log(singledata)
    setViewdata([singledata.TouristData]);
    setSingle(singledata.locationiddata)
    // console.log(singledata.locationiddata)

  }
  useEffect(() => {
    View()
  }, [edit])
  const { Deletedata, Getdata } = useContext(Data)

  const url = `http://localhost:7000/api/Tour`

  useEffect(() => {
    Getdata()
  }, [url])


  const DeleteData = async (_id) => {
    await axios.delete(`http://localhost:7000/api/Reviews/${_id}`, {
      headers: {
        "Authorization": `Bearer ${userid.token}`
      }
    })

  }
  return (
    <>
      <div className='main_view'>

        {
          viewdata.map((item, i) => {
            const { location: { coordinate: [lan, lat] },imagesd:{image} } = item;

            return (
              <div key={i} className='viewMore'>
                <div className='img_content'>
                  <div className='img_div'>
                    {/* <img src={item.image} alt='' /> */}
                    <Slider imge ={image} className="image"/>
                  </div>
                  <div className='content_div'>
                    <h1>{item.title}</h1>

                    <div className='loc'>
                      <p> <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" />{item.addresses}

                        &nbsp; &nbsp; <span> <Link to='/locations'> see map </Link></span>

                      </p>
                    </div>

                    <p className='description'>{item.description}</p>
                    <p>From<br /> <span className='price'> ₹{item.locationfee}</span></p>


                    { 
                     
                      <div className='Crud_buttons'>

                      <button className='Update' onClick={() => {
                        toggleupdate(item)
                        Navigate("/addlocation")
                      }}>Edit</button>
                      <button className='Delete' onClick={() => {
                        Deletedata(item._id)
                        Navigate('/locations')
                      }

                      }>Delete</button>

                    </div>
                   }


                    <p>Submitted By {user.email}</p>
                    {format(item.createdAt)}
                  </div>
                  <Link to='/locations'> View all locations</Link>
                </div>

                <div className='viewmap'>
                  <Newmap className="Newmap" lon={lan} latt={lat} />
                  <div className='reviews'>
                    <Reviews />
                  </div>
                  <div className="rating">
                    {
                      single.map((item) => {
                        console.log(item)
                        const { _id, rating, review, user, name } = item
                        console.log(item)
                        return (

                          <div className='stars' key={_id}>
                            <div className='StaR'>
                              <span> <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="" /> <span style={{color:"red"}}> {name}</span></span>
                              <div className='review-text'>
                                <p style={{ paddingBottom: "10px", fontWeight: "bold" }}>{review}</p>
                                <DynamicStar rating={rating} width="20" height="20" />
                              </div>
                              {
                                userid.user === user ?
                                  <div className="reviewbutton">


                                    <button onClick={() => setEdit(!edit)} className='reviewbtn' >Edit</button>
                                    {
                                      edit ? <Editform rev={review} rat={rating} id={_id} setEdt={setEdit} /> : " "

                                    }

                                    <button className='deletebtn' onClick={() => DeleteData(_id)}>Delete</button>


                                  </div>

                                  : " "}
                            </div>

                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

    </>
  )
}

export default ViewMore




