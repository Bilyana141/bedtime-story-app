import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
<div id={styles.text}>
      <h1 className={styles.headingHomeTemplate}>Once upon a time</h1>
      <p className={styles.paragraph}>
        <img className={styles.left} src="/images/tale1.jpg" alt="" />{" "}
        Experience the wonder of storytelling with Once Upon a Time, the social
        media platform that connects parents with a world of bedtime stories,
        fairy tales, and enchanting adventures. Say goodnight to boredom and
        hello to the power of imagination.
      </p>
      <h2 className={styles.headingHomeTemplateSecond}>An H2 heading </h2>
      <p className={styles.paragraph}>
        <img className={styles.right} src="/images/princess.jpg" alt="" />
        With Once upon a time, you can discover new bedtime stories, share your
        favorite tales, and connect with other like-minded parents who share
        your passion for storytelling. Our platform is designed to make it easy
        and fun to share stories with your children, whether you're a busy
        parent on-the-go or a stay-at-home parent looking for new ideas to keep
        your kids entertained.Join our community today and start creating
        lasting memories with your children through the power of storytelling.
      </p>
      <h3 className={styles.headingHomeTemplateThird}>And an H3 heading</h3>
      <blockquote>
        {" "}
        Reading should not be presented to children as a duty or an obligation.
        It should be presented to them as a valuable gift, this is the main task
        of their parents. The greatest gift is a passion for reading.{" "}
      </blockquote>
    </div>
    </div>
    
  );
};
