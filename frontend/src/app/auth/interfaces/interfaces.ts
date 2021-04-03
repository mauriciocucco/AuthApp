export interface AuthResponse {
  ok: boolean;
  msg: string;
  token?: string;
  id?: string;
  name?: string;
  email?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  ok: boolean;
  msg?: string;
  errors?: Errors;
}

export interface Errors {
  name?: ErrorData;
  email?: ErrorData;
  password?: ErrorData;
}

export interface ErrorData {
  msg: string;
  param: string;
  location: string;
}
