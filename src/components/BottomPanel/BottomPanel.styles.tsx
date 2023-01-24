import styled from "styled-components"

interface Props {
  isActive?: boolean,
  isClear?: boolean,
}

export const FilterButtonStyled = styled.button<Props>`
  display: flex;
  width: max-content;
  align-items: center;
  text-align: center;
  border: solid 1px;
  border-radius: 30px;
  border-color: transparent;
  padding: 1px 5px;
  color: ${(props) => props.isClear ? "black" : props.isActive ? "black" : "white"};
  background-color: ${(props: Props) => props.isActive ? "white" : "transparent"};
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
`

export const BottomPanelStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  gap: 5px;
  
  .tasks-number {
    width: 33%;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 14px;
  }

  .number {
    border: solid 1px;
    border-radius: 30px;
    border: none;
    padding: 1px 5px;
    color: black;
    background-color: white;
  }

  .filters {
    display: flex;
    background-color: darkgray;
    border-radius: 30px;

    &:hover ${FilterButtonStyled} {
      background-color: transparent;
      color: white;

      &:hover {
        background-color: white;
        color: black;
        transition: 0.3s;
      }
    }
  }

  .delete-done {
    display: flex;
    justify-content: flex-end;
    width: 33%;
  }

  .filter-button {
    display: flex;
  width: max-content;
  align-items: center;
  text-align: center;
  border: solid 1px;
  border-radius: 30px;
  border-color: transparent;
  padding: 1px 5px;
  color: ${(props) => props.isClear ? "black" : props.isActive ? "black" : "white"};
  background-color: ${(props: Props) => props.isActive ? "white" : "transparent"};
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
}
`

