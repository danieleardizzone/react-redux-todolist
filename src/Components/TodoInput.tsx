import React, { useEffect, useRef } from "react";
import { useState } from "react";


type TodoInputProps = {
    onAddTodo: (todo: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {

    const [todoText, setTodoText] = useState('');

    const handleOnAddTodo = () => {
        if (todoText.trim()) {
            onAddTodo(todoText.trim());
        }

        setTodoText('');
    }

    // logica di focus automatico sull'input al montaggio del component

    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        refInput.current?.focus();
    })



    return (
        <>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleOnAddTodo();
                }}
                ref={refInput}
            />

            <button onClick={handleOnAddTodo}>Add todo</button>
        </>
    );

};

export default TodoInput;