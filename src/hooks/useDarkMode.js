import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (storedValue === true) {
      document.body.classList.add("dark-mode");
    }
    if (storedValue === false) {
      document.body.classList.remove("dark-mode");
    }
  }, [storedValue]);

  return [storedValue, setValue];
};

// const setMode = () => {
//   if (darkMode === false) {
//     return setClassName("App");
//   }

//   if (darkMode === true) {
//     return setClassName("dark-mode App");
//   }
// };
