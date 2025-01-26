import React from 'react';
import { useDispatch } from 'react-redux';
import { completedTodo, removeTodo, unCompleteTodo } from '../redux/store';

type TodoItemProps = {
    index: number;
    todo: { text: string; completed: boolean };
}

const TodoItem: React.FC<TodoItemProps> = ({ index, todo }) => {

    const dispatch = useDispatch();

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
        <li key={index}>

            <span className={`todo-text ${todo.completed ? 'completed-todo' : ''}`}>
                {todo.text}
            </span>

            <button onClick={() => !todo.completed ? handleCompletedTodo(index) : handleUnCompleteTodo(index)}>{!todo.completed ? 'completed' : 'un complete'}</button>

            <button onClick={() => handleRemoveTodo(index)}>delete</button>
        </li>
    )

}

export default TodoItem;