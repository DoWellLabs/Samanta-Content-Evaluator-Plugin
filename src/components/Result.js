const Result = ({ children }) => {
  return (
    <div className="result-cont">
      <h1 className="result-heading">
        Result
      </h1>
      {children}
      {!children && (
        <h1 className="result-paragraph">
          Please Fill the fields and click on check..
        </h1>
      )}
    </div>
  );
};

export default Result;
