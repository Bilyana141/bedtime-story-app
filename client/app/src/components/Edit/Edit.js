import styles from './Edit.module.css';
import { useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { storyServiceFact } from '../../services/storyService';
import { StoryContext } from '../../context/StoryContext';
import { ErrorContext } from '../../context/ErrorContext'; 
export const Edit =()=>{
  const { onEditPost } =useContext(StoryContext)
    const { storyId } =useParams();
    const storyService = useService(storyServiceFact);
    const { error,setError} = useContext(ErrorContext)
    const { values,changeHandler,onSubmit,changeData} = useForm({
        _id:'',
        storyname:'',
        genre:'',
        author:'',
        recommendedage:'',
        imageUrl:'',
        story:'',
    },onEditPost);

    const validateForm = () => {
      if (!values.storyname.trim() || !values.genre.trim() || !values.author.trim() || !values.recommendedage.trim() || !values.imageUrl.trim() || !values.story.trim()) {
        setError('Please fill in all the fields.');
        return false;
      }
      return true;
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        onSubmit(e);
      }
    };

    useEffect(()=>{
        storyService.getOne(storyId)
        .then(result=>{
            changeData(result)
        })
    },[storyId])

    return (
        <div className={styles.editPage}>
        <section className={styles.edit}>
          <h1 className={styles.editHeading}>Edit post</h1>
          <form className={styles.form} method="post" onSubmit={handleSubmit}  >
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="storyname">Name:</label>
              <input
              className={styles.storyname} 
              type="text" id="storyname" 
              name="storyname"
              value={values.storyname} 
              onChange={changeHandler}
              />
      
              <label className={styles.label}  htmlFor="genre">Genre:</label>
              <input 
              className={styles.genre}  
              type="text" 
              id="genre" 
              name="genre"
              value={values.genre}
              onChange={changeHandler}
               />
      
              <label className={styles.label}  htmlFor="author">Author:</label>
              <input
              className={styles.author}  
              type="text" 
              id="author" 
              name="author"
              value={values.author}
              onChange={changeHandler}
               />
      
              <label className={styles.label}  htmlFor="recommendedage">Recommended age:</label>
              <input
              className={styles.recommendedage}  
              type="text" 
              id="recommendedage" 
              name="recommendedage"
              value={values.recommendedage}
              onChange={changeHandler}
              />
      
              <label className={styles.label}  htmlFor="imageUrl">Image Url:</label>
              <input 
              className={styles.imageUrl}  
              type="text" 
              id="imageUrl" 
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              />
      
              <label className={styles.label}  htmlFor="story">Story:</label>
              <textarea 
              className={styles.story}  
              name="story" 
              id="story" 
              cols="30" 
              rows="10"
              value={values.story}
              onChange={changeHandler}
              ></textarea>
      
             
              <button 
              className={styles.button} 
              type="submit">Edit Post</button>
         
            </fieldset>
          </form>
      
        </section>
      
      </div>
    )
}