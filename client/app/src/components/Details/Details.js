import styles from './Details.module.css';
import { storyServiceFact } from '../../services/storyService'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useService } from '../../hooks/useService';


export const Details =()=>{
  const { storyId } = useParams();
  const [story,setStory]=useState([]);
  const storyService = useService(storyServiceFact)
  useEffect(()=>{
    storyService.getOne(storyId)
    .then((result)=>{
      setStory(result)
      
    })

  },[storyId])
    return(  
    <div className={styles.detailsPage}>
    <section className={styles.detailsSection}>
      <h1 className={styles.detailsName}>STORYtails...</h1>

      <article className={styles.detailsContainer}>
        <h2 className={styles.detailsContainerName}>{story.storyname}</h2>
        <h3 className={styles.detailsContainerInfo}>Genre: {story.genre}</h3>
        <h3 className={styles.detailsContainerInfo}>Author: {story.author}</h3>
        <h3 className={styles.detailsContainerInfo}>Recommended age: {story.recommendedage}</h3>
        
         <div className={styles.ditailsButtons}>
          <Link className={styles.ditailsButtonsLink} to={`/publication/read/${story._id}`}>Read</Link>
          <a className={styles.ditailsButtonsLink}>Edit</a>
          <a className={styles.ditailsButtonsLink}>Delete</a>
        </div>
        
  
      </article>
      <article >
        <img className={styles.detailsImage} src={story.imageUrl} alt=""/>
      </article>
     
    
    </section>
    </div>
    )
}