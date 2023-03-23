import styles from './Create.module.css';
import { useState} from 'react'
export const Create=({
  onCreateStorySubmit,
})=>{
  const [values,setValues]=useState({
    storyname: '',
    genre:'',
    author:'',
    recommendedage:'',
    imageUrl:'',
    story:'',
  });
  const onChangeHandler =(e)=>{
    setValues(state=>({...state, [e.target.name]:e.target.value}))
  }

  const onSubmit =(e)=>{
    e.preventDefault()
    onCreateStorySubmit(values)
  }

    return (
        <div className={styles.createPage}>
        <section className={styles.create}>
          <h1 className={styles.createHeading}>Create post</h1>
          <form className={styles.form} onSubmit={onSubmit} >
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="storyname">Name:</label>
              <input value={values.storyname}  onChange={onChangeHandler} className={styles.storyname} type="text" id="storyname" name="storyname" />
      
              <label className={styles.label}  htmlFor="genre">Genre:</label>
              <input value={values.genre} onChange={onChangeHandler} className={styles.genre}  type="text" id="genre" name="genre" />
      
              <label className={styles.label}  htmlFor="author">Author:</label>
              <input value={values.author}  onChange={onChangeHandler}className={styles.author}  type="text" id="author" name="author" />
      
              <label className={styles.label}  htmlFor="recommendedage">Recommended age:</label>
              <input value={values.recommendedage} onChange={onChangeHandler} className={styles.recommendedage}  type="text" id="recommendedage" name="recommendedage"/>
      
              <label className={styles.label}  htmlFor="imageUrl">Image Url:</label>
              <input value={values.imageUrl} onChange={onChangeHandler} className={styles.imageUrl}  type="text" id="imageUrl" name="imageUrl"/>
      
              <label className={styles.label}  htmlFor="story">Story:</label>
              <textarea value={values.story} onChange={onChangeHandler} className={styles.story}  name="story" id="story" cols="30" rows="10"></textarea>
      
             
              <button className={styles.button} type="submit">Create Post</button>
         
            </fieldset>
          </form>
      
        </section>
      
      </div>
    )
}