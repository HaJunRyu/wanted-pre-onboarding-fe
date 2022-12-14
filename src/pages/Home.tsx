import React, { useEffect } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { LoginForm } from 'src/components';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from 'src/constants/localStorage';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    if (accessToken) navigate('/todo');
  }, [navigate]);
  return (
    <Container as="main">
      <Box as="section">
        <LoginForm />
      </Box>
    </Container>
  );
}

export default Home;
