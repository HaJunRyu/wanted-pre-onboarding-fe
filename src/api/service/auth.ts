import BaseApiService from 'src/api/core';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from 'src/types/api/auth';

class AuthApiService extends BaseApiService {
  constructor() {
    super('auth');
  }

  signIn(signInRequest: SignInRequest): Promise<SignInResponse> {
    return this.http
      .post('/signin', signInRequest)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  signUp(signUpRequest: SignUpRequest): Promise<SignUpResponse> {
    return this.http
      .post('/signup', signUpRequest)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }
}

export default new AuthApiService();
