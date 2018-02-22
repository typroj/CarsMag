export interface UsersList {
  name: string;
  gender: string;
  email: string;
  login: {
    username: string;
    password: string;
  };
  dob: string;
  pictureURL: string;
}
