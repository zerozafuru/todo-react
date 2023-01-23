import { filteredTodos } from "../../store/filtersSelector";
import { useSelector } from "react-redux";
import { FooterStyled } from "./Footer.styles";

const Footer = () => {
  const filtTodos = useSelector(filteredTodos)
  if (!filtTodos.length) {
    return
  }

  return (
    <FooterStyled>double click to change task</FooterStyled>
  )
}


export default Footer;