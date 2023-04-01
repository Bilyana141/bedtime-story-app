import styles from './Create.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';


export const Create=()=>{
const { onCreateStorySubmit } =useContext(AuthContext)
const { values, changeHandler, onSubmit } = useForm({
  storyname:'',
  genre:'',
  author:'',
  recommendedage:'',
  imageUrl:'',
  story:'',
},onCreateStorySubmit)


    return (
        <div className={styles.createPage}>
        <section className={styles.create}>
          <h1 className={styles.createHeading}>Create post</h1>
          <form className={styles.form} method="post" onSubmit={onSubmit} >
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="storyname">Name:</label>
              <input 
              value={values.storyname}  
              onChange={changeHandler} 
              className={styles.storyname} 
              type="text" id="storyname" 
              name="storyname" />
      
              <label className={styles.label}  htmlFor="genre">Genre:</label>
              <input 
              value={values.genre} 
              onChange={changeHandler} 
              className={styles.genre}  
              type="text" 
              id="genre" 
              name="genre" />
      
              <label className={styles.label}  htmlFor="author">Author:</label>
              <input 
              value={values.author}  
              onChange={changeHandler}
              className={styles.author}  
              type="text" 
              id="author" 
              name="author" />
      
              <label className={styles.label}  htmlFor="recommendedage">Recommended age:</label>
              <input 
              value={values.recommendedage} 
              onChange={changeHandler} 
              className={styles.recommendedage}  
              type="text" 
              id="recommendedage" 
              name="recommendedage"/>
      
              <label className={styles.label}  htmlFor="imageUrl">Image Url:</label>
              <input 
              value={values.imageUrl} 
              onChange={changeHandler} 
              className={styles.imageUrl}  
              type="text" 
              id="imageUrl" 
              name="imageUrl"/>
      
              <label className={styles.label}  htmlFor="story">Story:</label>
              <textarea 
              value={values.story} 
              onChange={changeHandler} 
              className={styles.story}  
              name="story" 
              id="story" 
              cols="30" 
              rows="10"></textarea>
      
             
              <button 
              className={styles.button} 
              type="submit">Create Post</button>
         
            </fieldset>
          </form>
      
        </section>
      
      </div>
    )
}