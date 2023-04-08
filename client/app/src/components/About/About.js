import styles from './About.module.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs'
export const About = ()=>{
    return(
        <div className="about">
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
            
            <li className={styles.contactUsList}> <FaPhoneAlt/> +78 36985210</li>
           
              <li className={styles.contactUsList}> <FiMail/> onceuponatime@yahoo.com</li>
            
            <li className={styles.contactUsList}> <BsInstagram/> OnceUpon</li>
          </ul>
        </section>
      </div>
    )
}