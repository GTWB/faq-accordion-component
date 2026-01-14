import starImg from "./images/icon-star.svg";
import plusImg from "./images/icon-plus.svg";
import minusImg from "./images/icon-minus.svg";
import { useState } from "react";

const data = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [showContent, setShowContent] = useState(1);
  return (
    <div className="accordion-container">
      <div className="accordion-title">
        {<img src={starImg} alt="star" />}
        <h1>FAQs</h1>
      </div>
      {data.map((obj, i) => (
        <AccordionItem
          key={i}
          data={obj}
          question={i + 1}
          showContent={showContent}
          setShowContent={setShowContent}
        />
      ))}
    </div>
  );
}

function AccordionItem({ data, question, setShowContent, showContent }) {
  let isActive = question === showContent;
  function show() {
    setShowContent(isActive ? null : question);
  }

  return (
    <div
      onClick={show}
      className="accordion-question"
      style={question === 4 ? { border: "0px" } : undefined}
    >
      <p>{data.question}</p>
      <img src={isActive ? minusImg : plusImg} alt="plus" />

      {isActive && (
        <div className="accordion-content">
          <p>{data.answer}</p>
        </div>
      )}
    </div>
  );
}
