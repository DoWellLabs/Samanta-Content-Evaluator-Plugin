const FormEl = ({ handleSubmit, setInputFields, isLoading }) => {
  return (
    <div className="p-4 bg-[var(--bg-form)] w-[350px] xl:w-[30%] flex flex-col items-center rounded-sm">
      <form
        className="flex flex-col gap-2 w-full text-[rgb(56, 56, 56)]"
        method="post"
        onSubmit={handleSubmit}
      >
        <>
          <label className="" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter the title"
            onChange={(e) =>
              setInputFields((prev) => ({ ...prev, title: e.target.value }))
            }
            id="title"
          />
        </>
        <>
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            rows="12"
            id="content"
            placeholder="Enter the content"
            onChange={(e) =>
              setInputFields((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[var(--bg-color-main)] text-[var(--color-paragraph)] rounded hover:brightness-75 "
        >
          {isLoading ? <span>loading...</span> : <span>Check</span>}
        </button>
        <button
          type="reset"
          disabled={isLoading}
          onClick={() =>
            setInputFields({
              title: "",
              content: "",
            })
          }
          className="w-full bg-[#eb8252] text-[#333] rounded hover:brightness-75 "
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormEl;
