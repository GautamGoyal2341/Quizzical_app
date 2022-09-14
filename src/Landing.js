import React from "react";
// import qdata from "./qdata";
import qdata from './qdata.json'
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

  return (
    <>
      {qdata.map((item => {
        return <div>
            {item.question}
        </div>
      }))}
     
    </>
  );
}

export default Land;
