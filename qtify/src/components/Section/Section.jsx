import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.showAll}>Show All</button>
      </div>

      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
