import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/store';


const TodoInput: React.FC = () => {

    const [todoText, setTodoText] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        // controllo se l'input contiene una stringa composta da spazi vuoti
        if (todoText.trim()) {
            // dispatch della action addTodo nello store
            dispatch(addTodo(todoText));
            // elimino eventuali spazi vuoti all'inizio e alla fine della stringa
            addTodo(todoText.trim());
        }

        // "azzero" il contenuto dell'input
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
                    if (e.key === 'Enter') handleAddTodo(); //invoca la funzione al down del tasto enter
                }}
                ref={refInput}
            />

            <button onClick={handleAddTodo}>Add todo</button>
        </>
    );

};

export default TodoInput;