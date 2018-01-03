/**
 *
 *
 */
export interface Credentials {
  identifier: string;
  password: string
}

export interface UserSignup {
  firstName: string,
  lastName: string,
  email: string
  credentials: Credentials,
}
