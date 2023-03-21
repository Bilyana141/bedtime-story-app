import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p>&copy; 2023 Bedtime Story App. All rights reserved.</p>
      </div>
    </footer>
  );
};