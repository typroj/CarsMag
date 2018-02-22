export interface UsersList {
  name: {
    title: string,
    first: string,
    last: string,
  };
  gender: string;
  email: string;
  login: {
    username: string;
    password: string;
  };
  dob: string;
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  };
}
