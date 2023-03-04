import React, { useEffect, useState } from 'react';
import   { MathJax,MathJaxContext }  from 'better-react-mathjax';

const Question = ({ questionId }) => {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId}`);
      const data = await response.json();
      console.log(data);
      setQuestion(data[0].Question);
    };

    fetchQuestion();
  }, [questionId]);

  return (
    <>
    <MathJaxContext>
    <MathJax>
      <div dangerouslySetInnerHTML={{ __html: question }}></div>
    </MathJax>
    </MathJaxContext>
    </>
  );
};

export default Question;
