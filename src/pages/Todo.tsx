import { Container, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TodoApiService from 'src/api/service/todo';
import { useNavigate } from 'react-router-dom';
import { TodoForm, TodoList } from 'src/components';
import { LOCAL_STORAGE_KEY } from 'src/constants/localStorage';
import type { Todo as TodoType } from 'src/types/api/todo';

function Todo() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    const getTodos = async () => {
      try {
        const todosResponse = await TodoApiService.getTodos({ accessToken: accessToken ?? '' });
        setTodos(todosResponse);
      } catch (error) {
        throw new Error(error as any);
      }
    };

    getTodos();
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    if (!accessToken) navigate('/');
  }, [navigate]);
  return (
    <Container as="main" p={30}>
      <Heading textAlign="center" mb={10}>
        Todo!
      </Heading>
      <TodoForm />
      <TodoList todos={todos} />
    </Container>
  );
}

export default Todo;
