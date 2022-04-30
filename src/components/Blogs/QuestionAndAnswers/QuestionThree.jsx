import React from 'react';

const QuestionThree = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg">
        <span className="text-gray-500">Question 3:</span> What is the purpose
        of jwt and how does it work?
      </h2>
      <p className="my-4">
        <span className="text-gray-500">Answer:</span> It is a token which
        contains secret code. It contains an encoded JSON object. For
        authenticating a user client application sends a JWT to the
        authorization header of the request in the HTTP to the backend API. Then
        the backend cross matches the JWT and authenticates a user if the JWT is
        valid
      </p>
      <hr />
    </div>
  );
};

export default QuestionThree;
