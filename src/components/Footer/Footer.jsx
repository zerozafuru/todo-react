import styles from "./Footer.module.css";

const Footer = (props) => {
  if (props.length) {
    return (
      <p className={styles.footer}>double click to change task</p>
    )
  }
}

export default Footer;