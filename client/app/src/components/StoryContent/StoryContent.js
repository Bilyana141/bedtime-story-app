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
    const [likes,setLikes]=useState([]);
    const [dislike,setDislike]=useState([]);
    const storyService = useService(storyServiceFact);
    
    useEffect(()=>{
      likeService.getLikesForPost(storyId)
      .then((result)=>{
        setLikes(result)
        setDislike(result)
      })
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
        await likeService.addLike({ userId, postId:storyId });
        const result = await likeService.getLikesForPost(storyId)
        setLikes(result);
       
        
        
      } catch (error) {
        console.error(error);
      }
    }
     const handleDislikeCLick=async()=>{
      try{
      await likeService.addDislike({ userId, postId:storyId });
      const result = await likeService.getLikesForPost(storyId)
        setDislike(result);
      }catch(error){
        console.error(error)
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
            <a className={styles.detailsButtonsLink} onClick={handleLikeClick}>Like ({likes ? likes.length : 0})</a>
            <a className={styles.detailsButtonsLink} onClick={handleDislikeCLick}>Dislike ({dislike ? dislike.length : 0}) </a>
          </div>
        </section>
      </div>
    )
 
}