import { useState } from "react";
import { LOGO } from "../utils/constants"

const Header=()=>{

const [btn,setbtn]=useState("Login");

    return(
        <div id="header">
            <div id="logo-container">
                <img src={LOGO} />
            </div>
            <div id="nav-items">
                <h4>Home</h4>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
                <h4>Cart</h4>
                <button className="login"
                 onClick={()=>{
                    btn==="Login"?setbtn("Logout"):setbtn("Login");
                 }}>{btn}</button>
            </div>

        </div>
    )
}

export default Header;