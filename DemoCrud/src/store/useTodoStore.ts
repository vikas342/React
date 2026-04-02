import { create, } from "zustand";


export interface ITodo{
    id: number;
    title: string;
    completed: boolean;

}

export interface ITodoStore{
    todos: ITodo[];
    addTodo: (title:string) => void;
    deleteTodo: (id:number) => void;
}

export const useTodoStore = create<ITodoStore>(set => ({
    todos: [],
    addTodo: (title:string) => set(prev => ({
        todos: [...prev.todos, {id: Date.now(), title, completed: false}]
    })),
    deleteTodo: (id:number) => set(prev => ({
        todos: prev.todos.filter(todo => todo.id !== id)
    })),

}));