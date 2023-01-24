import styled from "styled-components";

interface ITypeProps {
  isActive: boolean;
}

export const ListStyled = styled.li`

.delete-button {
  opacity: 0;
  color: brown;
  background-color: transparent;
  border: none;
  font-size: 20px;
  transition: 0.3s;
}

width: 100%;
list-style: none;
font-size: 20px;
padding: 5px 1px;
&:hover .delete-button {
  opacity: 1;
  transition: 0.3s;
}

.list-item {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.complete-box {
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
}

.rename-panel{
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  border-bottom: solid 3px darkgray;
  padding: 5px 0;
  width: 100%;
}
`

export const NamePanelStyled = styled.div<ITypeProps>`
  word-break: break-word;
  border-bottom: solid 3px darkgray;
  padding: 5px 0;
  width: 100%;
  text-decoration: ${(props) => props.isActive ? 'line-through' : 'none'};
  color: ${(props) => props.isActive ? 'grey' : 'black'};
`