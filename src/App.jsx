import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AccountSettings from './pages/AccountSettings.jsx';
import Feedback from './pages/Feedback.jsx';
import About from './pages/About.jsx';
import Support from './pages/Support.jsx';
import Legal from './pages/Legal.jsx';

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<AccountSettings />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>

  )
}
export default App
