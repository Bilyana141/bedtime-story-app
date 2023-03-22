import styles from './About.module.css'
export const About = ()=>{
    return(
        <div class="about">
        <h1 className={styles.aboutHeading}>About Us</h1>
        <section className={styles.aboutContent}>
          <p>Make bedtime magical with Once Upon a Time </p>
          <p><img className={styles.leftAbout} src="/images/fairy.png" alt="fairy"/>The social media app that connects you with other parents and a world of fantastical tales and adventures. Share stories, create memories, and make bedtime the best part of the day.Say goodbye to restless nights and hello to the wonder and excitement of your child's dreams.</p>
        </section>
        <section className={styles.contactUsSection}>
          <h2 className={styles.contactUsHeading}>
           You have any questions ?
          </h2>
          <ul >
            
            <li className={styles.contactUsList}> +78 36985210</li>
           
              <li className={styles.contactUsList}> onceuponatime@yahoo.com</li>
            
            <li className={styles.contactUsList}>OnceUpon</li>
          </ul>
        </section>
      </div>
    )
}