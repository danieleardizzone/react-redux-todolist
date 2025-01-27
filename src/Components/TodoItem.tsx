import React from 'react';
import { useDispatch } from 'react-redux';
import { completedTodo, removeTodo, unCompleteTodo } from '../redux/store';

type TodoItemProps = {
    todo: { id: number, text: string; completed: boolean };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

    const dispatch = useDispatch();

    const handleCompletedTodo = () => {
        dispatch(completedTodo(todo.id));
    }

    const handleUnCompleteTodo = () => {
        dispatch(unCompleteTodo(todo.id));
    }

    const handleRemoveTodo = () => {
        dispatch(removeTodo(todo.id));
    }

    return (
        <li>

            <span className={`todo-text ${todo.completed ? 'completed-todo' : ''}`}>
                {todo.text}
            </span>

            <button onClick={() => !todo.completed ? handleCompletedTodo() : handleUnCompleteTodo()}>{!todo.completed ? 'completed' : 'un complete'}</button>

            <button onClick={() => handleRemoveTodo()}>delete</button>
        </li>
    )

}

export default TodoItem;