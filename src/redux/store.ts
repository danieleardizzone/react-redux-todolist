import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    text: string,
    completed: boolean
};

type TodoState = Todo[];

const todoSlice = createSlice({

    name: 'todos',

    initialState: [] as TodoState,

    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({ text: action.payload, completed: false });
        },
        completedTodo: (state, action: PayloadAction<number>) => {
            state[action.payload].completed = true;
        },
        unCompleteTodo: (state, action: PayloadAction<number>) => {
            state[action.payload].completed = false;
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
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