import React from "react";
import {Link} from 'react-router-dom'

function Plans(){
 return(
    <div className="plan-style">
        <div className="plan-cont">
            <h1>Basic Plan</h1>
            <ul>
                <li>
                    Post questions along with code
                </li>
                <li>
                    Find questions
                </li>
                <li>
                    Post articles
                </li>
                <li>
                    Save your questions to your ID
                </li>
                <li>
                    Browse other articles
                </li>
            </ul>
            <h1>Free</h1>
            <i><h3>Selected</h3></i>
        </div>
        <div className="plan-cont">
            <h1>Premium Plan</h1>
            <ul>
                <li>
                    Customization features like messages and banners
                </li>
                <li>
                    Themes
                </li>
                <li>
                    Content controls
                </li>
                <li>
                    Additional admin
                </li>
                <li>
                    Support features like analytics dashboard
                </li>
            </ul>
            <h1>$50/ per year</h1>
            <Link to="/Plans/Premium-Checkout"><button>Upgrade to Premium</button></Link>
        </div>
    </div>
 );
}
export default Plans;
