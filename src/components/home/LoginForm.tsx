import React from 'react';
import { Button, Input, Link, Stack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function LoginForm() {
  return (
    <form>
      <Stack spacing={3} mb={6} mt={10}>
        <Input type="email" placeholder="이메일을 입력하세요" size="md" />
        <Input type="password" placeholder="비밀번호를 입력하세요" size="md" />
      </Stack>
      <Stack spacing={4} direction="row">
        <Button colorScheme="teal" size="lg">
          로그인
        </Button>
        <Link as={ReactLink} to="sign-up" colorScheme="teal" size="lg">
          <Button colorScheme="teal" size="lg">
            회원가입
          </Button>
        </Link>
      </Stack>
    </form>
  );
}

export default LoginForm;
