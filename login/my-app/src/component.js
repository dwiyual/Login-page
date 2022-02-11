import React from "react";
import "./index.css";
import { useState } from "react";


function Login() {
    const headermessage = "Login to your account";
    const h3Message = "how can we help you buisness";

    return <div className="wrapper">
        <div className="logo">
            <img alt=""></img>
        </div>
        <div className="frame14">
            <div className="frame13">
                <div className="frame2">
                    <h1 className="login-h1">{headermessage}</h1>
                    <h3 className="login-h2">{h3Message}</h3>
                </div>
                <div className="frame1">
                    <img className="img2" src="./src/images/google.png" alt=""></img>
                    <span className="google-text" >Continue with Google</span>
                </div>
            </div>
            <div className="span-border">
                <span>------------- or Sign in with Email ------------- </span>
            </div>
            <div className="frame12">
                <form className="frame11">
                    <label className="frame5">
                        Email
                        <input className="frame3" placeholder="mail@abc.com"></input>
                    </label>
                    <label className="frame9">
                        Password
                        <input className="frame4" placeholder="********"></input>
                    </label>
                    <label htmlFor="checkbox" className="frame8">
                        <input className="checkbox" type="checkbox" id="checkbox" placeholder="Remember Me"></input>
                    </label>
                    <p className="forgotpassword">Forgot Password?</p>
                    <div className="frame7">
                        <span className="login">Login</span>
                    </div>
                </form>
            </div>
        </div>
        <div className="frame10">
            <p className="not-registered">Not registered Yet?</p>
            <p className="create-account">Create a Account</p>
        </div>
    </div>




}



export default Login
