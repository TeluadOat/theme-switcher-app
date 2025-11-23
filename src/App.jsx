import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

import './App.css'

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
      <h1>Theme Switcher App</h1>
      <ThemeToggle />
      <p>Current theme: {theme} </p>
    </div>
  )
}
export default App
