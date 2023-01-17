// import React, { useEffect, useState, } from 'react';
// import axios from 'axios';
// import { FaStar } from "react-icons/fa"
// import { useAuthContext } from '../../Hooks/useAuthContext';
// // import { DynamicStar } from 'react-dynamic-star';
// import './Reviews.css';

// const Reviews = () => {
//     const { user } = useAuthContext();

//     const [rating, setRating] = useState(0)
//     const handleRating = (rating) => {
//         setRating(rating)
//     }

//     const [ReviewData, setReviewData] = useState([])

//     const [createreview, setCreatereview] = useState({
//         ReviewText: '',
//         Star: ''
//     })
//     // get data
//     const url = 'http://localhost:7000/api/Reviews'
//     const gatdata = async () => {
//         const res = await fetch(url)
//         const data = await res.json()
//         setReviewData(data)
//     }

//     // handle
//     const handleChange = (e) => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         setCreatereview({
//             ...createreview,
//             [name]: value
//         })

//     }

//     // review


//     // post data

//     const handleSubmit = async () => {

//         const res = await axios.post(url, createreview)
//         console.log(res)
//     }

//     // delete data
//     const handleDelete = async (_id) => {
//         await axios.delete(`http://localhost:7000/api/Reviews/${_id}`)
//         gatdata()
//     }

//     useEffect(() => {
//         gatdata()
//     }, [rating])
//     return (
//         <div className='Reviews'>
//             <h3 >Location Rating:</h3>
//             <form onSubmit={handleSubmit} className="reviewForm">
//                 <input type="Number" name="Star" value={ReviewData.Start} onChange={handleChange} placeholder="Rate the number 1-5" min={1} max={5} required />
//                 <label htmlFor="">Write a review </label>
//                 <textarea name="ReviewText" value={ReviewData.ReviewText} onChange={handleChange} placeholder="what did you like or dislike write here" required />
//                 <button>Submit</button>
//             </form>


//             {
//                 ReviewData.map((item, i) => {
//                     const { _id, ReviewText, Star } = item
//                     console.log(item)
//                     return (
//                         <div key={i} className="reviewContainer">
//                              <span style={{color:"red"}}><img src="https://cdn-icons-png.flaticon.com/512/668/668709.png" alt="" /> {user.email.substring(0,5)}</span>
//                              <div className='review-text'>
//                              <h2>{ReviewText}</h2>
//                             <p>{Star}<span><FaStar className='Starcolor' size={15} /></span></p>
//                              </div>

//                             <div className='ReviewmodifyButtons'>
//                                 <button className='button' >Edit</button>
//                                 <button  className="btn"onClick={() => {
//                                     handleDelete(_id)
//                                 }}>Delete</button>
//                             </div>

//                         </div>
//                     )
//                 })
//             }
//         </div>


//     )
// }

// export default Reviews




import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Rating } from "react-simple-star-rating"
import "./Reviews.css"

const Reviews = () => {
    const [render, setRender] = useState(false)
    const tourid = JSON.parse(localStorage.getItem('marking'))
    const userid = JSON.parse(localStorage.getItem("user"))
    const { token } = userid;

    const [reviewrate, SetReview] = useState({
        review: "",
        rating: ""
    })
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleText = (e) => {
        const { name, value } = e.target

        SetReview({
            ...reviewrate,
            [name]: value
        })
    }
    const newReview = new FormData()

    async function handlesubmit(e) {
        e.preventDefault();
        newReview.append("review", reviewrate.review);
        newReview.append("rating", rating);
        const Response = await axios.post(`http://localhost:7000/api/Reviews/${tourid}`, newReview, {

            headers: {
                "Authorization": `Bearer ${token}`
            }

        });
        SetReview(
            {
                review: "",
                rating: ""
            })
        if (Response) {
            setRender(true)
        }
    }
    useEffect(() => {
    }, [render])


    return (
        <>
            <div className="reviews">

                <form onSubmit={handlesubmit}>
                    <div>
                    <label htmlFor=''>Location Rating Score:</label><br />
                    <Rating ratingValue={rating}
                        onClick={handleRating}
                    />
                    </div><br />
                    <div className='rev'>
                    <label htmlFor=''>Write a Review:</label><br /><br />
                    <textarea name="review" id="#" cols="50" rows="5" value={reviewrate.review} onChange={handleText}> </textarea> <br />
                   
                    </div>

                    <button onClick={() => setRender(!render)}>Submit</button>
                 

                </form>
               
                <h3>Top Reviews</h3>
            </div>
           
        </>

    )
}

export default Reviews
