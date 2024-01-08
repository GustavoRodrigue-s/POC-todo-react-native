import { useState } from 'react';

import { createId } from '../utils';

interface Todo {
  id: string;
  text: string;
}

export const useTodos = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    const todoExists = todos.some(({ text }) => text === todoText)

    if (!todoText) {
      alert("Insira um nome para criar a tarefa.")
      return
    }

    if (todoExists) {
      alert("Insira outro nome para continuar.")
      return
    }

    const newTodo: Todo = {
      id: createId(),
      text: todoText
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const handleDelete = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return {
    todoText,
    todos,
    setTodoText,
    handleAdd,
    handleDelete
  }
}