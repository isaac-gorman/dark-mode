import React, {useState} from 'react'
import{ useLocalStorage } from "./useLocalStorage"
// useLocalStorage
// useDarkMode


export const useDarkMode = () => {
const [someValue, setSomeValue] = useLocalStorage(false)

// return
  // is darkMode enabled? 
  // - yes?
  // - no?
  // We also need to return a setter function that is capable of toggling between light and darkmode  

// I also  need to forward the value and the setter aka storedValue and setValue in an Array

}

// export default useDarkMode;