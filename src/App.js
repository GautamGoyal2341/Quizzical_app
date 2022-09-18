import React from 'react'
import Home from './home';
import Question from './Question';
function App()
{
   const[newpage , setNewPage] = React.useState(false);

   function HandleClick()
   {
     
      setNewPage(function(oldState){

        return true;

      })
   }
   
    return (
        <>
        
        { newpage ? <Question/> : <Home clickFunction={HandleClick}  />}
         </>
    )
}

export default App;