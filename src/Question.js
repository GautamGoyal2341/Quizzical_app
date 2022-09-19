import React from "react";
import data from "./data";
import Questdis from "./Questdis";
function Question() {
  const [qdata, setQdata] = React.useState([]);

  // React.useEffect(() => {
  //   fetch(
  //     "https://opentdb.com/api.php?amount=30&category=12&difficulty=easy&type=multiple"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setQdata(data));
  // }, []);
  // console.log(qdata);
  //   const getData = () => {
  //     fetch('https://opentdb.com/api.php?amount=30&category=12&difficulty=easy&type=multiple')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setQdata(data);
  //       // fetchbody(res?.body);
  //     });
  // };
  // React.useEffect(() => {
  // getData()
  // }, [])
  // console.log(qdata);
  // const cardD = qdata.results.map((item) => {
  //   return (
  //     <Questdis
  //       quess={item.question}
  //       // correct_ans={item.correct_answer}
  //       // incorrect_ans={item.incorrect_answers}
  //     />
  //   );
  // });

  const fetchData = () => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=26"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let gagan = data.results;
        console.log(gagan);
        setQdata(gagan);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {qdata.map((item) => (
        <Questdis 
        quess={item.question} 
        correct_ans={item.correct_answer}
        incorrect_ans={item.incorrect_answers}

        
        
        
        
        
        />
      ))}
    </div>
  );
}

export default Question;
