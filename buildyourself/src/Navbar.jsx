import './App.css';
import './index.css';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { FaRegCircleUser } from "react-icons/fa6";
import { useAuth } from './AuthContext';


  function Navbar() {
    const { user } = useAuth();

    return (
      <nav style={margin}>
        <img style={{width:250, boxShadow: 'none'}} src='./images/logo.jpg'></img>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          {user?.role === 'admin' ? (
            <li>
                <Link to="/admin">admin</Link>
              </li>
            ) : null}
            {user?.role === 'user' ||  user?.role === 'admin' ? (
            <li>
                <Link to="/userinfo">Pokój osobisty</Link>
              </li>
            ) : null}
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
            
          {!user ? (
              <Link className="logIcon" to="/login">
                <FaRegCircleUser />
                <p style={margLog}>Zaloguj</p>
              </Link>
            ) : (
                <Link className="logIcon" to="/logout">
                  <FaRegCircleUser />
                  <p style={margLog}>Wyloguj</p>
                </Link>
            )}
          </li>
        </ul>
      </nav>
      );
    }

const margin= {
  margin: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const colorIcon= {
  color: '#69B093'
}
const margLog= {
  marginLeft: '10px'
}
export default Navbar;
