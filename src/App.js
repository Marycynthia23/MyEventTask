import './App.css';
import { Home } from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormSuccess  from './Components/Sections/Form/FormSuccess';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<FormSuccess />} />
    </Routes>
    </Router>

    </div>
  );
}

export default App;
