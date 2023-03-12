import { useState } from "react";

export function Question({ summary, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black text-white w-[700px] mx-auto p-12 border-b-white border-b-[1px]">
      <div className="flex flex-row align-middle justify-between mb-4">
        <div className="text-2xl font-bold mr-5">{summary}</div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 pt-2 font-bold flex justify-center align-middle text-2xl rounded-full ${
            isOpen
              ? "bg-black text-white border-white border-[1px]"
              : "bg-white text-black"
          }`}
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>
      <div
        className={`transition-all ease-linear duration-350 text-xl
        `}
      >
        {isOpen ? text : ""}
      </div>
    </div>
  );
}

export default function QuestionSection({ header, questions }) {
  return (
    <div className="bg-black py-12 flex flex-col justify-start mx-auto">
      <div className="text-white font-bold text-3xl">{header}</div>
      {questions.map((question) => (
        <Question {...question} />
      ))}
    </div>
  );
}
