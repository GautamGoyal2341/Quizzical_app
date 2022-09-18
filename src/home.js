import React from "react";

function Home(pops)
{
    // const [newpage , setNewPage] = React.useState(false);
    // function click()
    // {
     
    //   setNewPage(true); 
  
    // }
    return(
        <>
        <div className='heading'>
         <h1>Q U I Z Z I C A L</h1>
         <h5>Click on START QUIZ</h5>
         </div>
        
         <button className='button' onClick = {pops.clickFunction} >Start Quiz</button>

         </>
        


    )
}

export default Home;