import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__mainbar}>
        <nav className={styles.header__button}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Publications</a></li>
          <li><a href="#">Register</a> </li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Logout</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">About us</a></li>
        </nav>
      </div>
    </header>
  );
};



