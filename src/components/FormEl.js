const FormEl = ({ handleSubmit, setInputFields, isLoading }) => {
  return (
    <div className="form-cont">
      <form
        className="form-el"
        method="post"
        onSubmit={handleSubmit}
      >
        <>
          <label htmlFor="title">
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
          className="primary-btn"
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
          className="sec-btn"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormEl;
