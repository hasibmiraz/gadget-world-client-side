import React from 'react';

const QuestionFour = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="1200">
      <div className="my-5">
        <h2 className="text-lg">
          <span className="text-gray-500">Question 4:</span> When should you use
          nodejs and when should you use mongodb?
        </h2>
        <p className="text-gray-500">Answer:</p>
        <p className="my-4">
          NodeJS: For application which requires high performance. When an
          application requires asynchronous behavior and wants to load the data
          fast. Node js is a good choice. Node js is best for creating APIs.
          Node js's noblocking behavior makes it more powerful
        </p>
        <p className="my-4">
          MongoDB: When the user has less budget the nosql db can be used.
          Because mainting nosql db is less expensive. When there is no
          requirement for fixed schema or data model it can be used. It also
          supports integrated caching so we can get more speed from the DB.
        </p>
      </div>
    </div>
  );
};

export default QuestionFour;
