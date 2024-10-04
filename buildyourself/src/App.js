import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import FAQ from './FAQ';
import MainPage from './MainPage';

  function App() {
    const sectionRef = useRef(null);
    return (
      <div className="App">
        <div className="navigation-bar">
        <Router>
            <div className="App">
                {/* Menu nawigacyjne */}
                <nav>
                    <ul>
                      <li>
                        <Link to="/">Strona główna</Link>
                      </li>
                        <li>
                            <Link to="/faq">Pytania/Odpowiedzi</Link>
                        </li>
                    </ul>
                </nav>

                {/* Definiujemy ścieżki do stron */}
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </div>
        </Router>
        </div>
        </div>
        
    );
  }
  
  export default App;
