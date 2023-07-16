import { useState } from "react";
import FormEl from "./components/FormEl";
import DisplayResult from "./components/DisplayResult";
import Theme from "./components/Theme";
import Result from "./components/Result";
const apiKey = import.meta.env.VITE_API_KEY;

function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // Removes spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

const App = () => {
  const [inputFields, setInputFields] = useState({
    title: "",
    content: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputFields.title === "" || inputFields.content === "")
      alert("All the fields are required");
    else {
      setLoading(true);
      const res = await fetch(
        `https://100085.pythonanywhere.com/uxlivinglab/v1/content-scan/${apiKey}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputFields),
        }
      );
      const data = await res.json();

      //success
      if (data.success) {
        const newData = {};

        for (const key in data) {
          const camelCaseKey = toCamelCase(key);
          newData[camelCaseKey] = data[key];
        }
        setData(newData);
      }

      // Failed
      if (!data.success) {
        alert(data.message);
      }

      setLoading(false);
    }
  };

  return (
    <>
      <Theme />
      <div className="app-cont">
        <FormEl
          handleSubmit={handleSubmit}
          setInputFields={setInputFields}
          isLoading={isLoading}
        />
        <Result>{data && <DisplayResult {...data} />}</Result>
      </div>
    </>
  );
};

export default App;
