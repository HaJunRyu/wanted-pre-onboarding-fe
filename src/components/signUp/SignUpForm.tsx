import React, { useState } from 'react';
import { Button, Input, Link, Stack, Text } from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import AuthApiService from 'src/api/service/auth';
import type { AuthForm } from 'src/types/api/auth';
import { validateEmail, validatePassword } from 'src/utils/auth';

function LoginForm() {
  const navigate = useNavigate();
  const [signUpFormState, setSignUpFormState] = useState<AuthForm & { passwordValid: string }>({
    email: '',
    password: '',
    passwordValid: '',
  });

  const [signUpFormError, setSignUpFormError] = useState({
    email: false,
    password: false,
    passwordValid: false,
  });

  const handleChangeAuthForm: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { id, value } = target;

    setSignUpFormState(pre => ({ ...pre, [id]: value }));
  };

  const handleSignUp: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (!validateEmail(signUpFormState.email)) {
      setSignUpFormError({ email: true, password: false, passwordValid: false });
      return;
    }
    if (!validatePassword(signUpFormState.password)) {
      setSignUpFormError({ email: false, password: true, passwordValid: false });
      return;
    }
    if (signUpFormState.password !== signUpFormState.passwordValid) {
      setSignUpFormError({ email: false, password: false, passwordValid: true });
      return;
    }

    setSignUpFormError({ email: false, password: false, passwordValid: false });

    try {
      await AuthApiService.signUp(signUpFormState);
      navigate('/');
    } catch (error) {
      throw new Error(error as any);
    }
  };
  return (
    <form onSubmit={handleSignUp}>
      <Stack spacing={3} mb={6} mt={10}>
        <Input
          id="email"
          type="text"
          value={signUpFormState.email}
          placeholder="이메일을 입력하세요"
          size="md"
          onChange={handleChangeAuthForm}
        />
        {signUpFormError.email && <Text color={'red'}>이메일 형식을 확인해주세요</Text>}
        <Input
          id="password"
          type="password"
          value={signUpFormState.password}
          placeholder="비밀번호를 입력하세요"
          size="md"
          onChange={handleChangeAuthForm}
        />
        {signUpFormError.password && <Text color={'red'}>비밀번호는 8글자 이상이어야합니다</Text>}
        <Input
          id="passwordValid"
          type="password"
          value={signUpFormState.passwordValid}
          placeholder="동일한 비밀번호를 한번 더 입력하세요"
          size="md"
          onChange={handleChangeAuthForm}
        />
        {signUpFormError.passwordValid && (
          <Text color={'red'}>위 비밀번호와 값이 같은지 확인해주세요</Text>
        )}
      </Stack>
      <Stack spacing={4} direction="row">
        <Button type="submit" colorScheme="teal" size="lg">
          회원가입
        </Button>
        <Link as={ReactLink} to="/" colorScheme="teal" size="lg">
          <Button colorScheme="teal" size="lg">
            로그인 하러 가기
          </Button>
        </Link>
      </Stack>
    </form>
  );
}

export default LoginForm;
