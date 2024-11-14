import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { useAuth } from '../helpers/AuthContext';

  function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const { user } = useAuth();

    return (
      <nav style={margin}>
        <img style={{width:250, boxShadow: 'none'}} src='./images/logo.jpg'></img>
        <ul>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>Strona główna</Link>
          </li>
          {user?.role === 'admin' ? (
            <li>
                <Link to="/admin" className={isActive('/admin') ? 'active' : ''}>Lista użytkowników</Link>
              </li>
            ) : null}
            {user?.role === 'user'? (
            <li>
                <Link to="/userinfo" className={isActive('/userinfo') ? 'active' : ''}>Pokój osobisty</Link>
              </li>
            ) : null}
            {user?.role === 'user' ? (
          <li>
            <Link to="/weeklymenuplan" className={isActive('/weeklymenuplan') ? 'active' : ''}>Plan</Link>
          </li>
          ) : null}
          <li>
              <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>Pytania/Odpowiedzi</Link>
          </li>
          <li>
            <Link to="/article" className={isActive('/article') ? 'active' : ''}>Blog</Link>
          </li>
          <li>
            <a href="https://forms.gle/Ug1nsYk9QxVHrGHC9" target="_blank" rel="noopener noreferrer">Kontakt</a>
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
  backgroundColor: "white",
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
