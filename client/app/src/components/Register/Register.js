import styles from './Register.module.css'
import { Link } from 'react-router-dom'
export const Register =()=>{
    return(
   
    <div className={styles.register}>

  <form  className={styles.form} action="#" method="post">

  <h1 className={styles.formHeading}>Register</h1>
  
  <fieldset className={styles.fieldset}>
    
    <label className={styles.label} htmlFor="name">Name:</label>
    <input className={styles.inputUsername}type="text" id="name" name="user_name"/>
    
    <label className={styles.label}  htmlFor="mail">Email:</label>
    <input className={styles.inputEmail} type="email" id="mail" name="user_email"/>
    
    <label className={styles.label}  htmlFor="password">Password:</label>
    <input className={styles.inputPassword} type="password" id="password" name="user_password"/>

    <label className={styles.label}  htmlFor="rePassword">Repeat Password:</label>
    <input className={styles.inputRePassword}  type="rePassword" id="rePassword" name="user_rePassword"/>
  
    <label className={styles.label}  htmlFor="image">Image:</label>
    <input className={styles.inputImage} type="text" id="image" name="user_image"/>
        
  </fieldset>
  
  <fieldset className={styles.fieldset}>
    
    <label className={styles.label}  htmlFor="bio">Something about you :</label>
    <textarea className={styles.inputBio} id="bio" name="user_bio"></textarea>
  </fieldset>
  
  <button className={styles.button} type="submit">Sign Up</button>
  <p className={styles.question}>You already have a account ? <Link className={styles.anker} to="/login">Login</Link></p>
  </form>
</div>
   
    )
}