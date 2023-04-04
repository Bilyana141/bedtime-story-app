import { useContext } from 'react'
import { Item } from './Item/Item'
import styles from './Publications.module.css' 
import { Link } from 'react-router-dom'
import { StoryContext } from '../../context/StoryContext'

export const Publications =()=>{
  const { stories }=useContext(StoryContext)
    return (
        <div className={styles.catalog}>
       <h2 className={styles.catalogHeading}>All treasures</h2>
       {stories.map(x=> <Item key={x._id} {...x}/>)}
       {stories.length ===0 && (
        <>
        <h3 className={styles.noTreasures}>No treasures yet </h3>
         <h4 className={styles.beFirst}>Be first.Create story <Link className={styles.clickHere} to="/create">here</Link> </h4>
        </>
         
       )} 
     

    </div>
    )
}