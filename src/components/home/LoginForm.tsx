import React, { useState } from 'react';
import { Button, Input, Link, Stack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import AuthApiService from 'src/api/service/auth';
import type { AuthForm } from 'src/types/api/auth';

function LoginForm() {
  const [authFormState, setAuthFormState] = useState<AuthForm>({ email: '', password: '' });

  const handleChangeAuthForm: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { id, value } = target;

    setAuthFormState(pre => ({ ...pre, [id]: value }));
  };

  const handleSignIn: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const res = await AuthApiService.signIn(authFormState);
    console.log(res);
  };
  return (
    <form onSubmit={handleSignIn}>
      <Stack spacing={3} mb={6} mt={10}>
        <Input
          id="email"
          type="email"
          value={authFormState.email}
          placeholder="이메일을 입력하세요"
          size="md"
          onChange={handleChangeAuthForm}
        />
        <Input
          id="password"
          type="password"
          value={authFormState.password}
          placeholder="비밀번호를 입력하세요"
          size="md"
          onChange={handleChangeAuthForm}
        />
      </Stack>
      <Stack spacing={4} direction="row">
        <Button type="submit" colorScheme="teal" size="lg">
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
