import styles from './StoryContent.module.css'
import * as storyService from '../../services/storyService'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
export const StoryContent =()=>{
    const { storyId } = useParams();
    const [story,setStory]=useState([])
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