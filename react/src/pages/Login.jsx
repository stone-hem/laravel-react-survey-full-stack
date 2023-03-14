import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

function Login() {
  const { setCurrentUser, setUserToken } = useStateContext('')
  const [email, setEmail] = useState('')
  const [remember,setRemember]=useState('0')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ __html: '' })

  const login = (ev) => {
    ev.preventDefault();
    setError({ __html: '' })

    axiosClient.post('/login', {
      email,
      password,
      remember,
    })
      .then(({ data }) => {
        setCurrentUser(data.user)
        setUserToken(data.token)
        console.log(data)
      })
      .catch((error) => {
        if (error.response) {
          const validationErrors = Object.values(error.response.data.errors).reduce((accum, next) => [accum, ...next,], [])
          // console.log(validationErrors)
          setError({ __html: validationErrors.join('<br>') })
        }
        console.error(error)
      })
  }
  return (
    <>
      <div>
        <a href="/">
          <h3 className="text-4xl font-bold text-purple-600">
            Login
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

        <form onSubmit={login}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@something.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value={remember}
                onChange={ev => setRemember(ev.target.value)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <div className="flex items-start mb-6">

            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Don't have an account? <Link to='/register' className="text-blue-600 hover:underline dark:text-blue-500">Register</Link></label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>
    </>

  );
}

export default Login