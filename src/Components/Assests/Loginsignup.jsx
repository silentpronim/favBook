import React, { useState } from 'react'
import './Loginsignup/Loginsignup.css'

import user_icon from '../Pictures/user2.png'
import email_icon from '../Pictures/email2.png'
import password_icon from '../Pictures/password2.png'
import books from '../Pictures/Books.png'

const Loginsignup = () => {
    const [action,setAction] = useState("Login");

  return (
    <div className='container'>
        <div classname="header">
            <div className="text">{action}</div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder="Name"/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="Email ID"/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" placeholder="Password"/>
            </div>
            {action==="Login"?<div></div>:<div className="input">
                <input type="Address" placeholder="Address"/>
            </div>}
            {action==="Login"?<div></div>:<div className="input">
                <input type="Date of birth" placeholder="Date of Birth"/>
            </div>}
            
            {action==="Login"?<div></div>:<div className="input">
                <input type="Mobile" placeholder="Mobile"/>
            </div>}
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Password? <span> Click Here!</span></div>}
        <div className="submit-container">
            <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Loginsignup