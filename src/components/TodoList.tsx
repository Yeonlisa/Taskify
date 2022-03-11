import React from 'react';
import { Todo } from '../model';

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {todos.map((todo) => (
                <li>{todo.todo}</li>
            ))}
        </div>
    )
}

export default TodoList