import { Container, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoForm } from 'src/components';
import { LOCAL_STORAGE_KEY } from 'src/constants/localStorage';

function Todo() {
  const navigate = useNavigate();

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
    </Container>
  );
}

export default Todo;
