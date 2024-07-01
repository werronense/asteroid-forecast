import React from "react";
import "./ErrorPage.scss";

interface ErrorPageProps {
  errorCode: number;
  errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode, errorMessage }) => {
  return (
    <>
      <p>{errorCode} Error</p>
      <p>{errorMessage}</p>
    </>
  );
};

export default ErrorPage;
