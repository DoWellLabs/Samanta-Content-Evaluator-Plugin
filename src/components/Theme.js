import { useState } from "react";

const themeOptions = localStorage.getItem("theme") || false;
document.documentElement.className = themeOptions ? "dark" : "";

const Theme = () => {
  const [toggle, setToggle] = useState(themeOptions);
  const handleToggle = (e) => {
    setToggle((prev) => setToggle(!prev));
    localStorage.setItem("theme", !toggle);
    document.documentElement.className = toggle ? "" : "dark";
  };

  return (
    <div className="theme">
      <p className="theme-paragraph">Dark mode</p>
      <label className="group">
        <button
          onClick={handleToggle}
          data-aria-checked={toggle}
          className="toggle-btn"
        >
          <div className="dot-pulse" />
        </button>
      </label>
    </div>
  );
};

export default Theme;
