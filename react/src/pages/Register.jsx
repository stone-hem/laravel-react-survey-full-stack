import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client.js';
import { useStateContext } from '../contexts/ContextProvider.jsx';

function Register() {
    const {setCurrentUser,setUserToken} =useStateContext('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [passwordConfirmation,setPasswordConfirmation]=useState('')
    const [error,setError]=useState({__html:''})

    const register=(ev)=>{
        ev.preventDefault();
        setError({__html:''})

        axiosClient.post('/register',{
            name,
            email,
            password,
            password_confirmation:passwordConfirmation
        })
        .then(({data})=>{
            setCurrentUser(data.user)
            setUserToken(data.token)
            console.log(data)
        })
        .catch((error)=>{
            if (error.response) {
                const validationErrors=Object.values(error.response.data.errors).reduce((accum,next)=>[accum,...next,],[])
                // console.log(validationErrors)
                setError({__html:validationErrors.join('<br>')})
            }
            console.error(error)
        })
    }

    
    return (
        <>
            
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Register
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    {error.__html && (
                        <div className="bg-red-400 rounded py-2 px-2 text-white"
                            dangerouslySetInnerHTML={error}>
                        </div>
                    )
                    }

                    <form onSubmit={register} action='#' method='POST'>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name {name}</label>
                            <input 
                            type="text"  
                            id="name" 
                            value={name}
                            onChange={ev =>setName(ev.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" 
                            required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={ev =>setEmail(ev.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@something.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={ev =>setPassword(ev.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                            <input 
                            type="password" 
                            id="repeat-password" 
                            value={passwordConfirmation}
                            onChange={ev =>setPasswordConfirmation(ev.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="flex items-start mb-6">
                            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Have an account? <Link to='/login' className="text-blue-600 hover:underline dark:text-blue-500">Login</Link></label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                    </form>


                </div>
        </>
    );
}

export default Register