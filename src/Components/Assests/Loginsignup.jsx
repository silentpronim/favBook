import React, { useState } from 'react'
import './Loginsignup/Loginsignup.css'

const Loginsignup = () => {
    const [action,setAction] = useState("Login");

  return (
    <div className='container'>
        <div classname="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <input type="text" placeholder="Name"/>
            </div>}
            
            <div className="input">
                <input type="email" placeholder="Email ID"/>
            </div>
            <div className="input">
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span> Click Here!</span></div>
        <div className="submit-container">
            <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Loginsignup