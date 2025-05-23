/**
 * Examples in React hooks
 * 
 * - React (library) is outside the scope of this course, but in case you've seen some React hooks code that looks like 
 * this:
 */

function App() {
  const [counter, setCounter] = useState(0);
}

/**
 * - The 'const [counter, setCounter] = useState(0)' is array destructuring.
 * 
 * - The function 'useState(0)' returns an array of 2 items and we destructure them into 2 variables 'counter' and 
 * 'setCounter'.
 * 
 * - If you've never seen this code above, then don't worry about it.
 * 
 * ================================================================================================================
 * 
 * Recap
 * 
 * - Array destructuring is syntactic sugar (meaning that it makes your code easier to read).
 * 
 * - The order in array destructuring matters, as every variable will be matched to the corresponding array item.
 * 
 * - You can identify destructuring when you see the square brackets [] on the left side of the equal sign.
 */