import { Button, Checkbox, Flex, HStack, Input, ListItem, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Todo } from 'src/types/api/todo';
import TodoApiService from 'src/api/service/todo';
import { LOCAL_STORAGE_KEY } from 'src/constants/localStorage';

interface TodoItemProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoItem({ todo, setTodos }: TodoItemProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodoValue, setEditTodoValue] = useState(todo.todo);

  const handleChangeTodoValue: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;
    setEditTodoValue(value);
  };

  const handleToggleTodo = async () => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    try {
      const editedTodo = await TodoApiService.updateTodo({
        todo: todo.todo,
        accessToken: accessToken ?? '',
        isCompleted: !todo.isCompleted,
        todoId: todo.id,
      });

      setTodos(preTodos =>
        preTodos.map(preTodo => (todo.id === preTodo.id ? editedTodo : preTodo))
      );
    } catch (error) {
      throw new Error(error as any);
    }
  };

  const handleUpdateTodo = async () => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    try {
      const editedTodo = await TodoApiService.updateTodo({
        todo: editTodoValue,
        accessToken: accessToken ?? '',
        isCompleted: todo.isCompleted,
        todoId: todo.id,
      });

      setTodos(preTodos =>
        preTodos.map(preTodo => (todo.id === preTodo.id ? editedTodo : preTodo))
      );

      setIsEditMode(false);
    } catch (error) {
      throw new Error(error as any);
    }
  };

  const handleDeleteTodo = async () => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

    try {
      await TodoApiService.deleteTodo({
        accessToken: accessToken ?? '',
        todoId: todo.id,
      });

      setTodos(preTodos => preTodos.filter(preTodo => todo.id !== preTodo.id));
    } catch (error) {
      throw new Error(error as any);
    }
  };

  return (
    <ListItem border="1px solid black" p={4} borderRadius={10} mb={1}>
      <Flex justifyContent="space-between" alignItems="center">
        {isEditMode ? (
          <>
            <Input onChange={handleChangeTodoValue} value={editTodoValue} />
            <HStack>
              <Button onClick={handleUpdateTodo}>완료</Button>
              <Button onClick={() => setIsEditMode(false)}>취소</Button>
            </HStack>
          </>
        ) : (
          <>
            <Flex alignItems="center">
              <Checkbox onChange={handleToggleTodo} isChecked={todo.isCompleted} mr={2} />
              <Text textDecoration={todo.isCompleted ? 'line-through' : 'none'}>{todo.todo}</Text>
            </Flex>
            <HStack>
              <Button onClick={() => setIsEditMode(true)}>수정</Button>
              <Button onClick={handleDeleteTodo}>삭제</Button>
            </HStack>
          </>
        )}
      </Flex>
    </ListItem>
  );
}

export default TodoItem;
