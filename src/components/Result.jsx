const Result = ({ children }) => {
  return (
    <div className="w-full md:w-[50%] p-4 px-8 self-start md:min-h-[600px] leading-9">
      <h1 className="text-3xl font-semibold p-4 pl-0 tracking-wider text-[var(--color-heading)]">
        Result
      </h1>
      {children}
      {!children && (
        <h1 className="text-2xl font-semibold p-4 pl-0 tracking-wider text-[var(--color-heading)]">
          Please Fill the fields and click on check..
        </h1>
      )}
    </div>
  );
};

export default Result;
