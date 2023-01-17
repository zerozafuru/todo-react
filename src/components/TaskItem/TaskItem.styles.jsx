import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`

export const DeleteButtonStyled = styled.button`
  opacity: 0;
  color: brown;
  background-color: transparent;
  border: none;
  font-size: 20px;
  transition: 0.3s;
`

export const ListStyled = styled.li`
  width: 100%;
  list-style: none;
  font-size: 20px;
  padding: 5px 1px;
  &:hover ${DeleteButtonStyled} {
    opacity: 1;
    transition: 0.3s;
`

export const BoxStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`

export const RenameStyled = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  border-bottom: solid 3px darkgray;
  padding: 5px 0;
  width: 100%;
`

export const NameStyled = styled.div`
  word-break: break-word;
  border-bottom: solid 3px darkgray;
  padding: 5px 0;
  width: 100%;
  &.done{
    text-decoration: line-through;
    color: grey;
  }
  &.active{}
`