import styles from './StoryContent.module.css'
import { storyServiceFact } from '../../services/storyService'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useService } from '../../hooks/useService';
import { FaArrowCircleLeft } from 'react-icons/fa';
export const StoryContent =()=>{
    const { storyId } = useParams();
    const [story,setStory]=useState([])
    const storyService = useService(storyServiceFact)
    useEffect(()=>{
      storyService.getOne(storyId)
      .then((result)=>{
        setStory(result)
        
      })
  
    },[storyId])
    return(
        <div className={styles.story}>
        <section className={styles.storyContent}>
          <h2 className={styles.storyHeadings}>{story.storyname}</h2>
          <Link to={`/publication/${story._id}`} >
            <FaArrowCircleLeft/>Back
          </Link>
          <div className={styles.storyTailContainer}>
          <p className={styles.storyTail}>{story.story}</p>
          </div>
          
          <div className={styles.detailsButtons}>
            <a className={styles.detailsButtonsLink}>Like</a>
            <a className={styles.detailsButtonsLink}>Dislike</a>
          </div>
        </section>
      </div>
    )
 
}