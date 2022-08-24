import { ListItem, UnorderedList } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { Todo } from 'src/types/api/todo';

const TodoItem = styled(ListItem)`
  border: 1px solid black;
  padding: 4px;
`;

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <UnorderedList listStyleType="none" ml={0}>
      {todos.map(({ todo, id }) => (
        <TodoItem key={`todo-${id}`}>{todo}</TodoItem>
      ))}
    </UnorderedList>
  );
}

export default TodoList;
