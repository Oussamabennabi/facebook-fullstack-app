import React, { useContext, useEffect, useRef, useState } from "react";
import { UserCard } from "../features/authentication/index";
import { Footer } from "../layouts";
import FaceboolLoginIcon from "../assets/facebook-login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../apiCalls";
const Login = () => {
  
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [userAccounts, setUserAccounts] = useState([]);
  
  const {  dispatch } = useContext(AuthContext);
   const handleSubmit = (e) => {
     e.preventDefault();
      if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Passwords don't match!");
      }
     if (!email || !password ) {
       setErrorMsg("please enter your informations correctly");
       return;
     }
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
useEffect(() => {
  setUserAccounts(JSON.parse(localStorage.getItem("userAccounts")));
}, []);
  return (
    <>
      <div className="  bg-slate-100  flex justify-center items-center p-4 lg:p-8">
        <div className="container h-full max-w-6xl mb-16 lg:mt-14  mx-auto flex gap-7  justify-between items-center lg:items-baseline flex-col lg:flex-row">
          <div className="flex flex-col gap-8 ">
            <div className="text-center lg:text-left">
              <img
                className="w-48  lg:-ml-5 mx-auto"
                src={FaceboolLoginIcon}
                alt="facebook"
              />
              <h1 className="text-2xl pb-1">Recent Logins</h1>
              <p className="text-gray-600 text-sm">
                Click your picture or add an account.
              </p>
            </div>
            <div className="flex gap-6  justify-center lg:justify-start flex-wrap">
              <UserCard isAddAccount={true} />
              {userAccounts?.slice(0,3)?.map((user, i) => (
                <div key={i}>
                  <UserCard user={user} setUserAccounts={setUserAccounts} />
                </div>
              ))}
            </div>
          </div>
          {/* Login form */}
          <div>
            <div className="">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-4 shadow-xl rounded-lg bg-white  w-96"
              >
                <input
                  ref={email}
                  className="px-3 py-4 focus:outline-2 border outline-blue-500 rounded-lg"
                  required
                  type="email"
                  placeholder="Email "
                />
                <input
                  ref={password}
                  className="px-3 py-4 focus:outline-2 border outline-blue-500 rounded-lg"
                  required
                  type="password"
                  placeholder="Password"
                />
                <input
                  ref={passwordAgain}
                  className="px-3 py-4 focus:outline-2 border outline-blue-500 rounded-lg"
                  required
                  type="password"
                  placeholder="Password again"
                />
                <p className="text-red-700 text-sm ">{errorMsg}</p>
                <button className="text-white text-xl font-bold px-3 py-4 hover:bg-blue-700 transition-all duration-300  bg-blue-600 rounded-lg">
                  Log In
                </button>
                <Link className="text-center" to={"/register"}>
                  <button className="text-white text-lg font-bold px-3 py-4 hover:bg-green-600 transition-all duration-300 w-fit mx-auto bg-green-500 rounded-lg">
                    Create new account
                  </button>
                </Link>
                <hr className="mt-4" />
              </form>
            </div>
            <p className="text-sm text-center py-7">
              <a href="/" className="font-bold ">
                Create a Page
              </a>{" "}
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
