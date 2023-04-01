import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

const LoginKeys ={
    Email:'email',
    Password:'password'
}

export const Login=()=>{
  const { onLoginSubmit } =useContext(AuthContext)
  const { values,changeHandler,onSubmit } = useForm({
    //username:'',
    [LoginKeys.Email]:'',
    [LoginKeys.Password]:'',
  },onLoginSubmit);
    return (
        <div className={styles.login}>
        <form className={styles.form} method="POST" onSubmit={onSubmit}>
          <h1 className={styles.formHeading}>Login</h1>
          <fieldset className={styles.fieldset}>
    
            {/* <label className={styles.label} htmlFor="name">Name:</label>
            <input 
            className={styles.inputUsername} 
            type="text" 
            id="name" 
            name="username"
            value={values.username}
            onChange={changeHandler}
            /> */}
            
            <label className={styles.label} htmlFor="mail">Email:</label>
            <input 
            className={styles.inputEmail} 
            type="" 
            id="mail" 
            name={LoginKeys.Email}
            value={values[LoginKeys.Email]}
            onChange={changeHandler}
            />
            
            <label className={styles.label} htmlFor="password">Password:</label>
            <input 
            className={styles.inputPassword} 
            type="password" 
            id="password" 
            name={LoginKeys.Password}
            value={values[LoginKeys.Password]}
            onChange={changeHandler}

            />
    
            <button className={styles.button} type="submit">Sign In</button>
            <p className={styles.question}>You do not have a account ? <Link className={styles.anker} to="/register">Register</Link></p>
    
    
          </fieldset>
    
        </form>
      </div>
    )
}