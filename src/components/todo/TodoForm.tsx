import { Button, HStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import TodoApiService from 'src/api/service/todo';
import { LOCAL_STORAGE_KEY } from 'src/constants/localStorage';
import { Todo } from 'src/types/api/todo';

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoForm({ setTodos }: TodoFormProps) {
  const [todoValue, setTodoValue] = useState('');

  const handleChangeTodoValue: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;
    setTodoValue(value);
  };

  const handleSubmitTodo: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

    try {
      const createdTodo = await TodoApiService.createTodo({
        todo: todoValue,
        accessToken: accessToken ?? '',
      });

      setTodos(preTodos => [...preTodos, createdTodo]);
      setTodoValue('');
    } catch (error) {
      throw new Error(error as any);
    }
  };
  return (
    <form onSubmit={handleSubmitTodo}>
      <HStack>
        <Input
          value={todoValue}
          onChange={handleChangeTodoValue}
          placeholder="할 일을 입력하세요"
        />
        <Button type="submit">추가</Button>
      </HStack>
    </form>
  );
}

export default TodoForm;
