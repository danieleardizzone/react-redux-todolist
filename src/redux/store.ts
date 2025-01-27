import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: number,
    text: string,
    completed: boolean
};

type TodoState = Todo[];

let nextTodoId = 0;

const todoSlice = createSlice({

    name: 'todos',

    initialState: [] as TodoState,

    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({
                id: nextTodoId,
                text: action.payload,
                completed: false
            });

            nextTodoId++;
        },
        completedTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = true;
            }
        },
        unCompleteTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = false;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    }

});

export const { addTodo, completedTodo, unCompleteTodo, removeTodo } = todoSlice.actions;

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;