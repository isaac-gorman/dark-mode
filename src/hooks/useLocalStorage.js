import React, {useState} from 'react'


export const useLocalStorage = (key, initialValue) => {
const [storedValue, setStoredValue] = useState(()=>{

  // Getting from localStorage via key
  const item = window.localStorage.getItem(key);

  // Now I am parsing and returning stored JSON or, if undefined, return initialValue
  return item? JSON.parse(item) : initialValue;
})
const setValue = (value) => {
 setStoredValue(value)

 window.localStorage.setItem(key, JSON.stringify(value));
}

return [storedValue, setValue]

}

// export default useLocalStorage;