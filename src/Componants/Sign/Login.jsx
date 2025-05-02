import React, { use, useState } from 'react';
import { Link,  useLocation,  useNavigate } from 'react-router';
import { AuthContext } from '../auth/Authconext';


const Login = () => {

    const { loginUser , setUser} = use(AuthContext)
    const [error, setError ] = useState('')

    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()

    const handleLogin =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // validation
        const validated = /.{6,}/
        if(validated.test(password) === false){
            setError('Must be more than 6 characters')
            return
        }
        // console.log(email, password);

        loginUser(email, password)
        .then(result => {
            const userr = result.user
            setUser(userr)
            // console.log(user);
            navigate(`${ location.state ? location.state : '/'}`)
            alert('user logged in successfully')
        })
        .catch((error) => {
             const errorCode = error.code;
            // set error on UI
            setError(errorCode)           
          });
    
           
    }

    // const redirectHome =()=>{
      
    // }
   

    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0  ">
            <div className="card-body">
                <h2 className='text-center text-2xl font-bold'>Login your acount</h2>
                <form onSubmit={handleLogin} className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit'  className="btn btn-neutral mt-4">Login</button>

                    {
                        error && <p className='text-red-400'>{error}</p>
                    }
                    <p className='font-semibold mt-5'>Dont't Have An Account ? <Link className='text-red-500' to='/auth/register'>Register</Link></p>
                </form>
            </div>
           
        </div>
        </div>
    );
};

export default Login;