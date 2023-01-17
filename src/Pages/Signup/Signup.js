import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignup } from '../../Hooks/useSignup'
import './Signup.css'

const Signup = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const { signup, error } = useSignup();
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
        console.log(email, password);
        setemail('')
        setpassword('')
        Navigate("/login")
    }
    return (
        <>
        <div className='main-form'>
            <form onSubmit={handleSubmit} >
                <h1>Register</h1>
                <div className='field'>
                    <label htmlFor="email">Username</label>
                    <input type="email" placeholder='Username@gmail.com'
                        onChange={(e) => setemail(e.target.value)} value={email} />
                </div>
                <div className='field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='..............' autoComplete='off'
                        onChange={(e) => setpassword(e.target.value)} value={password} />
                </div>

                <div className='submit-btn'>
                    <button>Submit</button>
                    <Link to='/login'>Existing User? Log in</Link>
                </div>
                {error && <p>{error}</p>}
            </form>
            <div className="Signupimage">
                <img src='https://www.pngkey.com/png/full/203-2035339_register-user-register-online-icon-png.png' alt='' />
            </div>
        </div>
            
        
        </>
    )
}

export default Signup