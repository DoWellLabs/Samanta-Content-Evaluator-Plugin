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
      <p className="pr-5 text-[var(--color-paragraph)]">Dark mode</p>
      <label className="group">
        <button
          onClick={handleToggle}
          data-aria-checked={toggle}
          className="flex items-center h-7 w-12 rounded-full border-2 border-transparent p-0 m-0"
        >
          <div className="bg-[var(--bg-toggle-dot)] h-6 w-6 rounded-full shadow" />
        </button>
      </label>
    </div>
  );
};

export default Theme;
