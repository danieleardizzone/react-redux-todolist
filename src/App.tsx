import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completedTodo, removeTodo, RootState, unCompleteTodo } from './redux/store';
import TodoInput from './Components/TodoInput';

function App() {
  // const [todo, setTodo] = useState('');

  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  //   const crossedTodo = (event: handleCompletedTodo) {
  //     const element = event.target;
  //     element.classList.toggle("crossed-line");
  // };

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  }

  const handleCompletedTodo = (index: number) => {
    dispatch(completedTodo(index));
  }

  const handleUnCompleteTodo = (index: number) => {
    dispatch(unCompleteTodo(index));
  }

  const handleRemoveTodo = (index: number) => {
    dispatch(removeTodo(index));
  }

  return (
    <div className="App">

      <TodoInput onAddTodo={handleAddTodo} />


      <ul>
        {todos.map((todo, index) => (
          <li key={index}>

            <span className={`todo-text ${todo.completed ? 'completed-todo' : ''}`}>
              {todo.text}
            </span>

            <button onClick={() => !todo.completed ? handleCompletedTodo(index) : handleUnCompleteTodo(index)}>{!todo.completed ? 'completed' : 'un complete'}</button>

            <button onClick={() => handleRemoveTodo(index)}>delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
