import styled from "styled-components";

// interface ITypeProps {
//   onSubmit: () => void;
// }

export const FormStyled = styled.form`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 10px 10px;
  gap: 10px;
`

export const InputStyled = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  width: 100%;
`

export const CompleteStyled = styled.input`
  &.done{
    opacity: 1;
  }
  &.active{
    opacity: 0;
  }
`