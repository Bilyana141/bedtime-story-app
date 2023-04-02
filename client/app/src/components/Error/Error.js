import styles from './Error.module.css'
export const Error =({message,closeError})=>{
    
    return (
        <div className={styles.errorBox}> 

            <button className={styles.button} onClick={closeError}>X</button>
            <p className={styles.errorMessage}>{message}</p>
        </div>
    )
}