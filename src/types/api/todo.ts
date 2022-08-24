interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface CreateTodoRequest {
  todo: string;
  accessToken: string;
}

export interface CreateTodoResponse extends Todo {}