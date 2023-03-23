import styles from './Login.module.css' 
import { Link } from 'react-router-dom'

export const Login=()=>{
    return (
        <div className={styles.login}>
        <form className={styles.form} action="#" method="post">
          <h1 className={styles.formHeading}>Login</h1>
          <fieldset className={styles.fieldset}>
    
            <label className={styles.label} htmlFor="name">Name:</label>
            <input className={styles.inputUsername} type="text" id="name" name="user_name"/>
            
            <label className={styles.label} htmlFor="mail">Email:</label>
            <input className={styles.inputEmail} type="email" id="mail" name="user_email"/>
            
            <label className={styles.label} htmlFor="password">Password:</label>
            <input className={styles.inputPassword} type="password" id="password" name="user_password"/>
    
            <button className={styles.button} type="submit">Sign In</button>
            <p className={styles.question}>You do not have a account ? <Link className={styles.anker} to="/register">Register</Link></p>
    
    
          </fieldset>
    
        </form>
      </div>
    )
}