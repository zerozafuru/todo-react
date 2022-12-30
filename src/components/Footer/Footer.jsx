import styles from "./Footer.module.css";

const Footer = (props) => {
  if (props.filtTodos.length > 0) {
    return (
      <p className={styles.footer}>double click to change task</p>
    )
  }
}

export default Footer;