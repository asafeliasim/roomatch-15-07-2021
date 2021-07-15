import React from 'react'
import { Link } from 'react-router-dom'

export const Landscape = () => {
    return (
        <div id="landscape" className="bg-secondary">
        <div id="landscape-content">
            <h1>Roomatch</h1>
            <p>תמצא לך את השותף המגורים האידאלי בשבילך 😃</p>  
            <div id="landscape-actions">
                <Link to="/user-login" className="btn btn-primary mx-1">
                    <i className="fas fa-user"></i> התחבר
                </Link>
                <Link to="/user-register" className="btn btn-secondary mx-1">
                    <i className="fas fa-sign-in-alt"></i> הירשם
                </Link>    
            </div>  
        </div> 

    </div>
    )
}
