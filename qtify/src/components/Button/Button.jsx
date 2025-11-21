import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    // 🔥 CHANGED: added onClick support in case you want to attach behavior later
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;



// import styles from "./Button.module.css"
// function Button({text}){
//     return ( <button className={styles.button}>{text}</button> )
// }
// export default Button;