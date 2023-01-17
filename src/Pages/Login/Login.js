
import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import "./Login.css"
import { useLogin } from '../../Hooks/useLogin';
const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const { login, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email , password);
        console.log(email , password);

        setemail("");
        setpassword("");
    }
    return (
        <>
        <div className='main-form'>
            <form onSubmit={handleSubmit}>
                <h1> Login</h1>
                <div className='field'>
                    <label htmlFor="email">Username</label>
                    <input type="email" placeholder='Username@gmail.com'
                        onChange={(e) => setemail(e.target.value)} value={email} />
                </div>
                <div className='field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='..............'
                        onChange={(e) => setpassword(e.target.value)} value={password} />
                </div>
                <div className='submit-btn'>
                <button>Submit</button>
               <Link to='/signup'>Register</Link>
                </div>
                {error && <p>{error}</p>}
            </form>
       
            <div className='loginimage'>
                <img src='https://www.planstudyabroad.uniagents.com/images/login.png' alt="Logi" />
            </div>
            </div>
    </>

    )
}



export default Login


