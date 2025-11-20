import styles from "./Card.module.css";
const Card = ({ imgLink, follow, albumName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={imgLink} alt="Album Art"  
            className={styles.image}/>
            <p className={styles.follows}>{follow} Follows</p>
      </div>
      
      <p className={styles.albumTitle}>{albumName}</p>
    </div>
  );
};
export default Card;
