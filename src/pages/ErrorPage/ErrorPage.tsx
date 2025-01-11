import React from "react";
import "./ErrorPage.scss";

interface ErrorPageProps {
  errorCode: number;
  errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode, errorMessage }) => {
  return (
    <>
      <h1>{errorCode} Error</h1>
      <p>{errorMessage}</p>
    </>
  );
};

export default ErrorPage;
