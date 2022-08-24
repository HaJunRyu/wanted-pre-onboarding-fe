import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { LoginForm } from 'src/components';

function Home() {
  return (
    <Container as="main">
      <Box as="section">
        <LoginForm />
      </Box>
    </Container>
  );
}

export default Home;
