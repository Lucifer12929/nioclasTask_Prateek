import React, { useState } from 'react';
import Question from './Question';
import './Question.css'

const questions = [
  'AreaUnderTheCurve_901',
  'BinomialTheorem_901',
  'DifferentialCalculus2_901',
];

const QuestionNavigator = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handlePrevClick = () => {
    setQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className='Question'>
      <div className='EachQuestion'>
        <h3>Question : {questionIndex}</h3>
        <Question questionId={questions[questionIndex]} />
        <div className='QuestionButton'>
            <button onClick={handlePrevClick} disabled={questionIndex === 0}>
                Prev
            </button>
            <button
                onClick={handleNextClick}
                disabled={questionIndex === questions.length - 1}
            >
                Next
            </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionNavigator;
