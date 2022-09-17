import React, { useEffect, useState } from "react";
import data from "./data";
function Question()
{
    // const [opt , setOpt] = React.useState(data);
    // const optdata = data.map(item => {
    //     <option  />
    // })

    // const[count,setCount] = React.useState(0);
    // function kick()
    
    // {
    //     setCount(prevCount => prevCount+1);
    // }
//   const[name,setName] = useState([]);


//     useEffect(() => {
//         names();
//     })

//     const names  = () => {

//     const response = fetch('https://opentdb.com/api.php?amount=10');
//      setName( response.json())

//     }
//     console.log(names);


    useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=10";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);


    

        //   <div className="quest-box">
        //         <h2 className="quest-main">How would one say goodbye in Spanish?</h2>


        //   </div>
        // <>
        // <h1 >{count}</h1>
        // <button onClick={kick}>CLick me</button>
        // </>
        
          
         



}

export default Question;