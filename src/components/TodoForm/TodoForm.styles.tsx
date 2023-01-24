import styled from "styled-components";

interface Props {
  isActive?: boolean
}

export const FormStyled = styled.form`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 10px 10px;
  gap: 10px;

  .new-task-panel {
    border: none;
    outline: none;
    font-size: 20px;
    width: 100%;
  }
`

export const CompleteBoxStyled = styled.input<Props>`
  opacity: ${(props) => props.isActive ? "1" : "0"};
`