import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../assets/back.css"

export default function(){
    return(
        <div className = "back"> 
            <h3><ArrowBackIcon className = "icon" /> Back To Home</h3>   
        </div>
    );
}