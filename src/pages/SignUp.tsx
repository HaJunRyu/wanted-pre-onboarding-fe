import { Box, Container } from '@chakra-ui/react';
import { SignUpForm } from 'src/components';

function SignUp() {
  return (
    <Container as="main">
      <Box as="section">
        <SignUpForm />
      </Box>
    </Container>
  );
}

export default SignUp;
