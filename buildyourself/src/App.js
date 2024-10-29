import './App.css';
import './index.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { FaRegCircleUser } from "react-icons/fa6";

import FAQ from './FAQ';
import MainPage from './MainPage';
import Article from './Article';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Article6 from './Article6';
import Register from './Register';
import Login from './Login';
import UserInfo from './UserInfo';
import WeeklyMenuPlan from './WeeklyMenuPlan';
import MealDetailView from './MealDetailView';

  function App() {
    const sectionRef = useRef(null);
    return (
      <div className="App">
        <div className="navigation-bar">
          <Router>
            <div className="App">
              {/* Menu nawigacyjne */}
              <nav style={margin}>
                    <ul>
                      <li>
                        <Link to="/">Strona główna</Link>
                      </li>
                      <li>
                        <Link to="/userinfo">Pokój osobisty</Link>
                      </li>
                      <li>
                        <Link to="/weeklymenuplan">Plan</Link>
                      </li>
                        <li>
                            <Link to="/faq">Pytania/Odpowiedzi</Link>
                        </li>
                        <li>
                          <Link to="/article">Blog</Link>
                        </li>
                        <li style={colorIcon}>
                          <Link className="logIcon" to="/login">
                            < FaRegCircleUser/>
                            <p style={margLog}>Zaloguj</p>
                          </Link>
                        </li>
                    </ul>
              </nav>

                {/* Definiujemy ścieżki do stron */}
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/article" element={<Article />} />
                  <Route path="/1" element={<Article1 />} />
                  <Route path="/2" element={<Article2 />} />
                  <Route path="/3" element={<Article3 />} />
                  <Route path="/4" element={<Article4 />} />
                  <Route path="/5" element={<Article5 />} />
                  <Route path="/6" element={<Article6 />} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/userinfo" element={<UserInfo/>} />
                  <Route path="/weeklymenuplan" element={<WeeklyMenuPlan/>} />
                  <Route path="/mealdetailview/:mealId" element={<MealDetailView/>} />
                </Routes>
              </div>
            </Router>
          </div>
        </div>
      );
    }
const margin= {
  margin: '40px'
}
const colorIcon= {
  color: '#69B093'
}
const margLog= {
  marginLeft: '10px'
}
export default App;
