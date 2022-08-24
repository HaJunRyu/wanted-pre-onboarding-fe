export interface AuthForm {
  email: string;
  password: string;
}

interface AccessToken {
  access_token: string;
}

export interface SignInRequest extends AuthForm {}
export interface SignInResponse extends AccessToken {}

export interface SignUpRequest extends AuthForm {}
export interface SignUpResponse extends AccessToken {}
