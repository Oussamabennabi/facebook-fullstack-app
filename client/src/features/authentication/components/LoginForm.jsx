import React, { useState } from 'react'


import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    // for checking if there is a passwor or email at least
    // if (!email || !password) {
    //   setErrorMsg("please enter your informations correctly")
    //   return
    // };
    // there is no use for email or password
    // dispatch(signInAPI(email,password))
  }
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 shadow-xl rounded-lg bg-white  w-96"
      >
        <input
          value={email}
          onChange={(e) =>{
             setEmail(e.target.value)
             setErrorMsg('')
          }}
          className="px-3 py-4 focus:outline-2 border outline-blue-500 rounded-lg"
          type="email"
          placeholder="Email or Phone number"
        />
        <input
          value={password}
          onChange={(e) =>{
             setPassword(e.target.value)
             setErrorMsg('')
          }}
          className="px-3 py-4 focus:outline-2 border outline-blue-500 rounded-lg
          
          "
          type="password"
          placeholder="Password"
        />
        <p
          className='text-red-700 text-sm '
        >{errorMsg}</p>
        <button className="text-white text-xl font-bold px-3 py-4 hover:bg-blue-700 transition-all duration-300  bg-blue-600 rounded-lg">
          Log in
        </button>
        <a
          href="./forgotpassword"
          className="text-blue-500 text-sm text-center"
        >
          Forgot password?
        </a>
        <hr className="mt-4" />
        <button className="text-white text-lg font-bold px-3 py-4 hover:bg-green-600 transition-all duration-300 w-fit mx-auto bg-green-500 rounded-lg">
          Create new account
        </button>
      </form>
    </div>
  );
}

export default LoginForm