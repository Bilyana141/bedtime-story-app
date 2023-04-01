import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './Header.module.css';

export const Header = () => {
  const { isAuthenticated,username }=useContext(AuthContext)
  return (
    <header className={styles.header}>
      <div className={styles.header__mainbar}>
        <nav className={styles.header__button}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/publication">Treasures</Link></li>
          <li><Link to="/about">About us</Link></li>
          {isAuthenticated && (
            <>
             <li><Link to="/create">Create</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <span className={styles.span}>Hello, {username} !</span>
            </>
            
          )}
          {!isAuthenticated &&(
            <>
              <li><Link to="/register">Register</Link> </li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
          
        
         
        </nav>
      </div>
    </header>
  );
};



