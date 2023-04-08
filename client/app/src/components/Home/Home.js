import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div id={styles.text}>
        <h1 className={styles.headingHomeTemplate}>Once upon a time</h1>
        <p className={styles.paragraph}>
          <img className={styles.left} src="/images/tale1.jpg" alt="" />{" "}
          Experience the wonder of storytelling with Once Upon a Time, the
          social media platform that connects parents with a world of bedtime
          stories, fairy tales, and enchanting adventures. Say goodnight to
          boredom and hello to the power of imagination.
        </p>
        <h2 className={styles.headingHomeTemplateSecond}>
          Benefits of Reading Fairy Tales to Your Little Ones{" "}
        </h2>
        <p className={styles.paragraph}>
          <img className={styles.right} src="/images/princess.jpg" alt="" />
          Are you wondering how centuries-old fairy tales can benefit your child
          in this digital age? Well, no matter how old fairy tales are, they can
          always make your kid’s childhood happy and memorable.Be it The
          Brothers Grimm or Jeanne-Marie Leprince de Beaumont, all the classic
          magic stories can benefit your child in a number of ways:Early
          development,Develops problem-solving skills,Builds faith in
          goodness,Stimulates imagination ,Strengthens emotional resiliency and
          etc.
        </p>
        <h3 className={styles.headingHomeTemplateThird}>Start make memories {isAuthenticated && ( <Link className={styles.link} to="/publication">now</Link>)} </h3>
        <blockquote>
          {" "}
          Reading should not be presented to children as a duty or an
          obligation. It should be presented to them as a valuable gift, this is
          the main task of their parents. The greatest gift is a passion for
          reading.{" "}
        </blockquote>
      </div>
    </div>
  );
};
