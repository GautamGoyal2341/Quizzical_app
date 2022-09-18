import React from "react";
import data from "./data";
function Question()
{

       const[qdata , setQdata] = React.useState([]);
      
        fetch("https://opentdb.com/api.php?amount=30&category=12&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setQdata(data))   
        // console.log(setQuestData);  

        return (
          <div>
            <h1>hji</h1>
            <pre>{JSON.stringify(qdata,null,2)}</pre>
          </div>


        )
      



}

export default Question;

