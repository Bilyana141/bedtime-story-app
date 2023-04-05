import styles from './Profile.module.css';
import { AuthContext } from '../../context/AuthContext';
import { StoryContext } from '../../context/StoryContext';
import { useContext, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Profile =()=>{
    const { username,bio,image,email,userId } =useContext(AuthContext)
    const { stories } =useContext(StoryContext);
    const [myStories,setMyStories]=useState([]);

    useEffect(()=>{
        const filteredStories = stories.filter((story)=>story._ownerId === userId)
        setMyStories(filteredStories)
    },[stories,userId]);

    return(
    <div className={styles.container}>
     <article className={styles.profile}>
        <img className={styles.profilePicture} src={image} alt="" />
        <h3 className={styles.username}>Username: {username}</h3>
        <h3 className={styles.email}>Email: {email}</h3>
        <p className={styles.bio}>About me:{bio}</p>
     </article>
     <section className={styles.mystory}>
        <h2 className={styles.storyHeading}>Your Stories:</h2>
        <ul className={styles.stories}>
            {myStories.map((story)=>(
            <li key={story._id} className={styles.story}>
                {story.storyname}
                </li>
            ))}
           {myStories.length ===0 && (
            <>
            <h3 className={styles.h3}>You haven't created any stories yet</h3>
            <h3 className={styles.h3}>Create one  <Link to="/create" >now</Link></h3>
            </>
          
           )}
        </ul>
     </section>
    </div>
    )
}