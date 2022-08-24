import BaseApiService from 'src/api/core';
import {
  CreateTodoRequest,
  CreateTodoResponse,
  GetTodosRequest,
  GetTodosResponse,
} from 'src/types/api/todo';

class TodoApiService extends BaseApiService {
  constructor() {
    super('todos');
  }

  createTodo({ todo, accessToken }: CreateTodoRequest): Promise<CreateTodoResponse> {
    return this.http
      .post('', { todo }, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  getTodos({ accessToken }: GetTodosRequest): Promise<GetTodosResponse> {
    return this.http
      .get('', { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }
}

export default new TodoApiService();
