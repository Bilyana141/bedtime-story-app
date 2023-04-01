import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

const RegisterKeys ={
  Username:'username',
  Email:'email',
  Password:'password',
  ConfirmPassword:'confirmPassword',
  ImageUrl:'imageUrl',
  Bio:'bio'
}

export const Register =()=>{
  const { onRegisterSubmit } = useContext(AuthContext);
  const {values,changeHandler,onSubmit} =useForm({
    [RegisterKeys.Username]:'',
    [RegisterKeys.Email]:'',
    [RegisterKeys.Password]:'',
    [RegisterKeys.ConfirmPassword]:'',
    [RegisterKeys.ImageUrl]:'',
    [RegisterKeys.Bio]:'',
  },onRegisterSubmit)

    return(
   
    <div className={styles.register}>

  <form  className={styles.form}  method="post" onSubmit={onSubmit}>

  <h1 className={styles.formHeading}>Register</h1>
  
  <fieldset className={styles.fieldset}>
    
    <label className={styles.label} htmlFor="name">Name:</label>
    <input 
    className={styles.inputUsername}
    type="text" 
    id="name" 
    name={RegisterKeys.Username}
    value={values[RegisterKeys.Username]}
    onChange={changeHandler}
   
    />
    
    <label className={styles.label}  htmlFor="mail">Email:</label>
    <input 
    className={styles.inputEmail} 
    type="email" 
    id="mail"
     name={RegisterKeys.Email}
     value={values[RegisterKeys.Email]}
     onChange={changeHandler}
     />
    
    <label className={styles.label}  htmlFor="password">Password:</label>
    <input 
    className={styles.inputPassword} 
    type="password" 
    id="password" 
    name={RegisterKeys.Password}
    value={values[RegisterKeys.Password]}
    onChange={changeHandler}
    />

    <label className={styles.label}  htmlFor="rePassword">Repeat Password:</label>
    <input 
    className={styles.inputRePassword}  
    type="rePassword" 
    id="rePassword" 
    name={RegisterKeys.ConfirmPassword}
    value={values[RegisterKeys.ConfirmPassword]}
    onChange={changeHandler}
    />
  
    <label className={styles.label}  htmlFor="image">Image:</label>
    <input 
    className={styles.inputImage} 
    type="text" 
    id="image" 
    name={RegisterKeys.ImageUrl}
    value={values[RegisterKeys.ImageUrl]}
    onChange={changeHandler}
    />
    
        
  </fieldset>
  
  <fieldset className={styles.fieldset}>
    
    <label className={styles.label}  htmlFor="bio">Something about you :</label>
    <textarea 
    className={styles.inputBio} 
    id="bio" 
    name={RegisterKeys.Bio}
    value={values[RegisterKeys.Bio]}
    onChange={changeHandler}
    ></textarea>
  </fieldset>
  
  <button className={styles.button} type="submit">Sign Up</button>
  <p className={styles.question}>You already have a account ? <Link className={styles.anker} to="/login">Login</Link></p>
  </form>
</div>
   
    )
}