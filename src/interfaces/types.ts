// That is an example of defining your types. Delete these interfaces and add yours.

export interface User {
  name: string;
  surname: string;
}

export interface AdminUser extends User {
  email: string;
}
