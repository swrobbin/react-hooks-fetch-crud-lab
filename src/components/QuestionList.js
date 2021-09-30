import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {

  console.log(questions, "?")
  // const renderQuestions = questions.map((q) => {
  // //   return <QuestionItem key={q.index} questions={questions} />
  // // })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {renderQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
