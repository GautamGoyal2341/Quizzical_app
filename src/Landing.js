import React from "react";
// import qdata from "./qdata";
import qdata from "./qdata";
function Land() {
  // function ye()
  // {

  // }
  //   const [currquest, setCurrQuest] = React.useState({
  //     question: "",
  //     Option1: "",
  //     Option2: "",
  //     Option3: "",
  //     Option4: "",
  //     Option5: "",
  //   });
  const [quest, setQuest] = React.useState(qdata);
  var heldvalue;

  return (
    <>
      <div className="land-main">
        {qdata.map((item) => {
          return (
            <div>
              <h2 className="land-qued">{item.question}</h2>
              <div className="land-opd">
                <h4 className="land-opdd" onClick>{item.opt1}</h4>
                <h4 className="land-opdd">{item.opt2}</h4>
                <h4 className="land-opdd">{item.opt3}</h4>
                <h4 className="land-opdd">{item.opt4}</h4>
                {item.isHeld}
              </div>
            </div>
           
                
          
          );
        
          
        
        })}
      </div>
    </>
  );
}

export default Land;
