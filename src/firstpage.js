import React from "react";
import App from './App'

import Land  from "./Landing";
import {useNavigate} from 'react-router-dom'


function Fp()
{


    const navigate = useNavigate();  

    function page()
    {
    
             navigate("/land")
     
    }
    return(
        <main>
            <div className="title">
                <h1>QUIZZELS</h1>
                <h4>Lets The Fun Begins</h4>
            </div>
            <div>
                <button className="title-button" onClick={page}>Start Quiz</button>
            </div>
        </main>
    )
}

export default Fp;