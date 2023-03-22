import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__mainbar}>
        <nav className={styles.header__button}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/publication">Publications</Link></li>
          <li><Link to="/register">Register</Link> </li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/about">About us</Link></li>
        </nav>
      </div>
    </header>
  );
};



