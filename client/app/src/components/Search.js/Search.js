import styles from './Search.module.css'
export const Search = ()=>{
    return (
        <div className={styles.sidebar}>
         <form method="post" action="#">
           <h1 className={styles.heading}>Search</h1>
           <input type="text" name="name" id="name" class="submit-input" size="18%" />
           <br />
           <input type="submit" value="Submit" class="submit-button" alt="Subscribe to our newsletter" />
         </form>
       </div>
    )
}