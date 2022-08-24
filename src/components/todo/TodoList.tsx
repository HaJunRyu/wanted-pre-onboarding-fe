import { UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { Todo } from 'src/types/api/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <UnorderedList listStyleType="none" ml={0} mt={6}>
      {todos.map(todo => (
        <TodoItem todo={todo} key={`todo-${todo.id}`} setTodos={setTodos} />
      ))}
    </UnorderedList>
  );
}

export default TodoList;
