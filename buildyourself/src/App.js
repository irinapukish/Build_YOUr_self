import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
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
import AdminDashboard from './AdminDashboard';
import Login from './Login';
import UserInfo from './UserInfo';
import WeeklyMenuPlan from './WeeklyMenuPlan';
import MealDetailView from './MealDetailView';
import Navbar from './Navbar';
import Logout from './Logout';

  function App() {
    return (
      <div className="App">
        <div className="navigation-bar">
        <AuthProvider>
          <Router>
            <div className="App">
              {/* Menu nawigacyjne */}
              <Navbar/>

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
                <Route path="/logout" element={<Logout/>} />
                <Route path="/weeklymenuplan" element={<WeeklyMenuPlan/>} />
                <Route path="/mealdetailview/:mealId" element={<MealDetailView/>} />
                <Route element={<ProtectedRoute roles={['user', 'admin']} />}>
                  <Route path='/userinfo' element={<UserInfo />}/>
                </Route>
                <Route element={<ProtectedRoute roles={['admin']} />}>
                  <Route path="/admin" element={<AdminDashboard />} />
                </Route>
                </Routes>
              </div>
            </Router>
            </AuthProvider>
          </div>
        </div>
      );
  }

export default App;
