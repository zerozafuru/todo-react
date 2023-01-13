import { filteredTodos } from "../../store/filtersSelector";
import { useSelector } from "react-redux";
import styles from "./Footer.module.css";

const Footer = (props) => {
  const filtTodos = useSelector(filteredTodos)
  if (!filtTodos.length) {
    return
  }

  return (
    <p className={styles.footer}>double click to change task</p>
  )
}


export default Footer;