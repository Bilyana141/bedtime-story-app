import styles from './StoryContent.module.css';

import { storyServiceFact } from '../../services/storyService';
import { likeServiceFactory } from '../../services/likeService';
import { AuthContext } from '../../context/AuthContext';

import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useService } from '../../hooks/useService';
import { FaArrowCircleLeft } from 'react-icons/fa';

export const StoryContent =()=>{
    const { token,userId }=useContext(AuthContext);
    const likeService= likeServiceFactory(token);
    const { storyId } = useParams();
    const [story,setStory]=useState([]);
    const [likesCount,setLikesCount]=useState(0);
 
    const storyService = useService(storyServiceFact);
    
    useEffect(()=>{
      likeService.getLikesForPost(storyId)
      .then((result)=>{
        setLikesCount(result.length);
      });
        
    },[storyId]);


    useEffect(()=>{
      storyService.getOne(storyId)
      .then((result)=>{
        setStory(result)
        
      })
    },[storyId]);

    const handleLikeClick = async () => {
      console.log('Button is clicked');
      try {
        console.log(storyId);
        await likeService.addLike({ userId,storyId })
        .then(()=>{
          likeService.getLikesForPost(storyId)
          .then((result)=>{
            setLikesCount(result.length);
          })
        })
       
       
        console.log('Likes:', likesCount);
        
      } catch (error) {
        console.error(error);
      }
    }

   
    
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
            <a className={styles.detailsButtonsLink} onClick={handleLikeClick}>Like ({likesCount})</a>
            
          </div>
        </section>
      </div>
    )
 
}