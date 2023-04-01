import styles from './Item.module.css'
import { Link } from 'react-router-dom';
export const Item = ({
    storyname,
    author,
    imageUrl,
    _id
}) => {
  return (
    <>
    
      <article className={styles.item}>
        <img className={styles.itemImg} src={imageUrl} alt="" />
        <h3 className={styles.storyName}>{storyname}</h3>
        <h4 className={styles.author}>{author}</h4>
        <Link className={styles.anker} to={`/publication/${_id}`}>
          Details
        </Link>
      </article>
    </>
  );
};
