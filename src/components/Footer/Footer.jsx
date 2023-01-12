import { filteredTodos } from "../../store/filters";
import { useSelector } from "react-redux";
import styles from "./Footer.module.css";



const Footer = (props) => {
  const filtTodos = useSelector(filteredTodos)
  if (filtTodos.length) {
    return (
      <p className={styles.footer}>double click to change task</p>
    )
  }
}

export default Footer;