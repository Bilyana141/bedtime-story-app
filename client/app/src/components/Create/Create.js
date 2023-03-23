import styles from './Create.module.css';
export const Create=()=>{
    return (
        <div className={styles.createPage}>
        <section className={styles.create}>
          <h1 className={styles.createHeading}>Create post</h1>
          <form className={styles.form} action="#" method="POST">
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="fairytalename">Name:</label>
              <input className={styles.fairytalename} type="text" id="fairytalename" name="fairytalename" />
      
              <label className={styles.label}  htmlFor="genre">Genre:</label>
              <input className={styles.genre}  type="text" id="genre" name="genre" />
      
              <label className={styles.label}  htmlFor="author">Author:</label>
              <input className={styles.author}  type="text" id="author" name="author" />
      
              <label className={styles.label}  htmlFor="recommendedage">Recommended age:</label>
              <input className={styles.recommendedage}  type="text" id="recommendedage" name="recommendedage"/>
      
              <label className={styles.label}  htmlFor="imageUrl">Image Url:</label>
              <input className={styles.imageUrl}  type="text" id="imageUrl" name="imageUrl"/>
      
              <label className={styles.label}  htmlFor="story">Story:</label>
              <textarea className={styles.story}  name="story" id="story" cols="30" rows="10"></textarea>
      
              <label className={styles.label}  htmlFor="recommend">Are you the author of the story?</label>
              <input className={styles.radio} type="radio" name="yes" id="yes"/><label htmlFor="yes" className={styles.radioLabel}>yes</label>
              <input className={styles.radio} type="radio" name="no" id="no"/><label htmlFor="no" className={styles.radioLabel}>no</label>
              
              <button className={styles.button} type="submit">Create Post</button>
         
            </fieldset>
          </form>
      
        </section>
      
      </div>
    )
}