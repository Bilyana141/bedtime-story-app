import styles from './Register.module.css'
export const Register =()=>{
    return(
   
    <div className={styles.register}>

  <form  className={styles.form} action="#" method="post">

  <h1 className={styles.formHeading}>Register</h1>
  
  <fieldset className={styles.fieldset}>
    
    <label className={styles.label} for="name">Name:</label>
    <input clssname={styles.inputUsername}type="text" id="name" name="user_name"/>
    
    <label className={styles.label}  for="mail">Email:</label>
    <input clssname={styles.inputEmail} type="email" id="mail" name="user_email"/>
    
    <label className={styles.label}  for="password">Password:</label>
    <input clssname={styles.inputPassword} type="password" id="password" name="user_password"/>

    <label className={styles.label}  for="rePassword">Repeat Password:</label>
    <input clssname={styles.inputRePassword}  type="rePassword" id="rePassword" name="user_rePassword"/>
  
    <label className={styles.label}  for="image">Image:</label>
    <input clssname={styles.inputImage} type="text" id="image" name="user_image"/>
        
  </fieldset>
  
  <fieldset className={styles.fieldset}>
    
    <label className={styles.label}  for="bio">Something about you :</label>
    <textarea clssname={styles.inputBio} id="bio" name="user_bio"></textarea>
  </fieldset>
  
  <button className={styles.button} type="submit">Sign Up</button>
  <p className={styles.question}>You already have a account ? <a className={styles.anker} href="/">Login</a></p>
  </form>
</div>
   
    )
}