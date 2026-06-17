import { useState } from 'react'
import './App.css'


const FaqItem = ({ques,ans}) =>{
  const[show,setshow]=useState(false);

  const toggleShow = () =>{
    setshow(!show);
  }
  return(
  <div className={`faq-item ${show ? "active" : ""}`}>
    <div className="faq-header" onClick={toggleShow}>{ques}</div>
    <div className="faq-item-body">
      <div className="faq-item-body-content">
        {ans}
      </div>
    </div>
  </div>
  )
}


const FaqAccordion =({data})=>{
  return(
    <div className="faq-accordion" >
      <h2>FAQs</h2>
     {data.map((item)=>(
      <FaqItem key={item.id} ques={item.question} ans={item.answer}/>
     ))}
    </div>
  )
};
const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React."
  },
  {
    id: 3,
    question: "What is useState?",
    answer:
      "useState is a React Hook that lets you add state to functional components."
  },
  {
    id: 4,
    question: "What is useEffect?",
    answer:
      "useEffect is a React Hook used to perform side effects such as data fetching or DOM updates."
  },
  {
    id: 5,
    question: "Why use React?",
    answer:
      "React makes it easier to build fast, reusable, and interactive user interfaces."
  }
];

function App() {
  

  return (
    <>
     <div className="App">
      <FaqAccordion data={data}/>
     </div>
    </>
  )
}





export default App
