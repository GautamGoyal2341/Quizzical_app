import React from "react";
// import { Routes, Route } from "react-router-dom";
import Fp from "./firstpage";
import Land from "./Landing";
// import { useNavigate } from "react-router-dom";

function App() {
  
//   const [newpage , setNewPage] = React.useState(false);
//   function page() {
//   setNewPage(true);
//   {setNewPage ? };
//   }
//   return (
//     <div>
//       <div className="title">
//         <h1>QUIZZELS</h1>
//         <h4>Lets The Fun Begins</h4>
//       </div>
//       <div>
//         <button className="title-button" onClick={page}>
//           Start Quiz
//         </button>
//        </div>
//       {/* <Routes>
//         <Route path = '/' element = {<Fp/>}  />

//         <Route path="/Land" element={<Land />} />
//       </Routes> */}
//     </div>
     
  
//   );
return(
    <>
        <Land/>
    </>
    
)
}

export default App;
