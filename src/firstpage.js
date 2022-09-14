import React from "react";
import App from './App'
function Fp()
{
    function page()
    {
        console.log("s")
        // alert("a")
        return(
            <App/>
        )
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