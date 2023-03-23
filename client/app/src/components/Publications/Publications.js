import styles from './Publications.module.css' 

export const Publications =()=>{
    return (
        <div className={styles.catalog}>
      <h2 className={styles.catalogHeading}>All treasures</h2>
      <article className={styles.item}>
        <img className={styles.itemImg} src="/public/images/hp.jpg" alt=""/>
        <h3 class="bookName">Harry Potter</h3>
        <h4 className={styles.author} >Author</h4>
        <a className={styles.anker} href="/">Details</a>

      </article>
      <article className={styles.item}>
        <img className={styles.itemImg} src="/public/images/hp.jpg" alt=""/>
        <h3 className={styles.bookName}>Harry Potter</h3>
        <h4 className={styles.author}>Author</h4>
        <a className={styles.anker} href="/">Details</a>

      </article>
    </div>
    )
}