import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    } else {
      // Use system preference as default
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="bg-gray-300 dark:bg-gray-800 rounded-full w-12 h-6 flex items-center p-1 transition"
    >
      <div
        className={`bg-white dark:bg-black w-4 h-4 rounded-full shadow-md transform transition ${
          isDarkMode ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
