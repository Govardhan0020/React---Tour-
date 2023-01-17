import React, { useState } from 'react'
import axios from 'axios'
import { Rating } from "react-simple-star-rating"

const Editform = ({ rev, rat, id, setEdt }) => {
    const [reviewstatus, setReview] = useState({ review: rev, rating: rat })
    const [rating, setRating] = useState(0)
    const userid = JSON.parse(localStorage.getItem("user"))
    const { token } = userid
    const newreview = new FormData()
    const handletext = (e) => {
        const { name, value } = e.target
        setReview({ ...reviewstatus, [name]: value })
    }
    const handleRating = (rate) => { setRating(rate) }
    const url = `http://localhost:7000/api/Reviews/${id}`
    const submitreview = async (e) => {
        e.preventDefault()
        newreview.append("review", reviewstatus.review)
        newreview.append("rating", rating)
        console.log(reviewstatus.review, rating)
        const res = await axios.patch(url, newreview, { headers: { "Authorization": `Bearer${token}` } })
        setReview({ review: "", })
        if (res) { setEdt(false) }
    }
    return (<div className='helo'>
        <form onSubmit={submitreview}>
            <lable>Review:</lable>
            <textarea name="review" id=" " cols="40" rows="5" value={reviewstatus.review} onChange={handletext} placeholder="Add Review"></textarea>
            <p>Rating:</p>
            <Rating ratingValue={reviewstatus.rating} onClick={handleRating}  />
            <button style={{ backgroundColor: "green", color:"white", padding:"8px", border:"none" }}>Update Review</button>
        </form>
    </div>)
}
export default Editform