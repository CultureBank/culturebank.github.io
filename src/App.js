import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import DataPage from './Pages/DataPage';
import FuturePage from './Pages/FuturePage';
import EvaluationPage from './Pages/EvaluationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/discussion" element={<FuturePage />} />
        <Route path="/evaluation" element={<EvaluationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
