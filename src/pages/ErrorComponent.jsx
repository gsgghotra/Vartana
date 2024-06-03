// ErrorComponent.jsx
import React from 'react';

const ErrorComponent = () => {
  // Deliberately throw an error
  throw new Error("This is a test error!");
  return <div>This will not be rendered.</div>;
};

export default ErrorComponent;
