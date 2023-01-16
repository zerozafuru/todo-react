import styled from "styled-components";

export const ButtonsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  gap: 5px;
`

export const TasksNumberStyled = styled.div`
  width: 33%;
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 14px;
`

export const NumberStyled = styled.span`
  border: solid 1px;
  border-radius: 30px;
  border: none;
  padding: 1px 5px;
  color: black;
  background-color: white;
`

export const ButtonStyled = styled.button`
  display: flex;
  width: max-content;
  align-items: center;
  text-align: center;
  border: solid 1px;
  border-radius: 30px;
  border-color: transparent;
  background-color: transparent;
  padding: 1px 5px;
  color: black;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
  &.active{
    background-color: white;
  }
  &.disabled{
    background-color: transparent;
    color: white;
  }
`

export const FiltersStyled = styled.div`
  display: flex;
  background-color: darkgray;
  border-radius: 30px;
  &:hover ${ ButtonStyled } {
    &.active
      display: none;
      background-color: transparent;
      color: white;
      &:hover {
        background-color: white;
        color: black;
        transition: 0.3s;
      }
    };
  }
`
export const DeleteAllStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;
`