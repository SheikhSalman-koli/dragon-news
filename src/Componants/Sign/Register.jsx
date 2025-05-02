import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../auth/Authconext';

const Register = () => {

    const { createUser , setUser} = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        // console.log(email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user
            setUser(user)
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0  ">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-bold'>Register your acount</h2>
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text"
                            name='name'
                            className="input"
                            placeholder="Name"

                        />
                        {/* photo url */}
                        <label className="label">Photo url</label>
                        <input type="text"
                            name='name'
                            className="input"
                            placeholder="Photo url"

                        />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email"
                            name='email'
                            className="input"
                            placeholder="Email"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required
                        />
                        {/* terms */}
                        <div className='flex items-center gap-3 mt-3'>
                            <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                            <p>accept our terms & conditions</p>
                        </div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold mt-5'>Already Have An Account ? <Link className='text-red-500' to='/auth/login'>Login</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;