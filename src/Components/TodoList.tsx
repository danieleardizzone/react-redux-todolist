import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {

    const todos = useSelector((state: RootState) => state.todos);

    return (

        <ul>
            {todos.map((todo, index) => (
                <TodoItem index={index} todo={todo} />
            ))}
        </ul>

    );

}

export default TodoList;

