import { filteredTodos } from "../../store/filtersSelector";
import { useAppSelector } from "../../hook";
import { FooterStyled } from "./Footer.styles";

const Footer: React.FC = () => {
  const filteredTodosLength = useAppSelector(filteredTodos).length
  if (!filteredTodosLength) {
    return null
  }

  return (
    <FooterStyled>double click to change task</FooterStyled>
  )
}

export default Footer;