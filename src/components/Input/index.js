import React from "react";
import {useDispatch} from "react-redux";
import {ActionCreator, handleKeyDown} from "../../reduser";
import {useLocalStorage} from "../../services/useLocalStorage";
import styled from 'styled-components';

const StyledInput = styled.input`
  min-width: 172px;
  border: none;
  background: transparent;
  color: ${({todo}) => todo.isOverdue ? "red" : "white"};
  font-size: 1rem;
  outline: none;
  text-decoration: ${({todo}) => todo.isCompleted ? "line-through" : ""};
`;

const Input = (props) => {
  const {todoItems, todo, i} = props
  // let {dispatch} = useContext(Context)
  const dispatch = useDispatch();
  let [storedValue, setValue] = useLocalStorage()
  const args = {i, todoItems, todo, dispatch, storedValue, setValue}
  
  return (
	<StyledInput
	  {...props}
	  type="text"
	  maxLength="20"
	  value={todo.content}
	  onKeyDown={e => (handleKeyDown(e, args))}
	  onChange={e => dispatch(ActionCreator.input(e,args))}
	  onBlur={(e) => dispatch(ActionCreator.input(e,args))}
	/>
  )
}

export default Input
