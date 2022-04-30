import React from 'react';
import Footer from '../Footer/Footer';
import QuestionFour from './QuestionAndAnswers/QuestionFour';
import QuestionOne from './QuestionAndAnswers/QuestionOne';
import QuestionThree from './QuestionAndAnswers/QuestionThree';
import QuestionTwo from './QuestionAndAnswers/QuestionTwo';

const Blogs = () => {
  return (
    <>
      <div className="w-full md:w-3/4 px-2 md:mx-auto">
        <h1 className="text-center text-3xl mt-5">Question & Answer</h1>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
        <QuestionFour />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
