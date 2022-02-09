import React from "react";
import "./index.css";

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            headerMessage: "Login to your account",
            h3Message: "see what we can do for your buisness",
        };
    }
    render(){
        return <div className="frame14">
                    <div className="frame13">
                        <h1 >{this.state.headerMessage}</h1>
                        <h3 className="login-h3">{this.state.h3Message}</h3>
                    <div className="google-button">
                        <button >Continue with Google</button>
                    </div>
                    </div>
                    <div><span>------------- or Sign in with Email ------------- </span></div>

             </div>
             
      
    }

}

export default Login
