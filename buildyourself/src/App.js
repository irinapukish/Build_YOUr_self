import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./helpers/AuthContext";
import ProtectedRoute from "./helpers/ProtectedRoute";
import FAQ from "./components/FAQ";
import MainPage from "./components/MainPage";
import Article from "./components/Article";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
import Article4 from "./components/Article4";
import Article5 from "./components/Article5";
import Article6 from "./components/Article6";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./helpers/Login";
import UserInfo from "./components/UserInfo";
import WeeklyMenuPlan from "./components/WeeklyMenuPlan";
import MealDetailView from "./components/MealDetailView";
import Navbar from "./components/Navbar";
import Logout from "./helpers/Logout";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/weeklymenuplan" element={<WeeklyMenuPlan />} />
            <Route path="/mealdetailview/:mealId" element={<MealDetailView />} />
            <Route element={<ProtectedRoute roles={["user", "admin"]} />}>
              <Route path="/userinfo" element={<UserInfo />} /></Route>
            <Route element={<ProtectedRoute roles={["admin"]} />}>
              <Route path="/admin" element={<AdminDashboard />} /></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
