import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UsersList} from '../../model/UserList';

@Injectable()

export class ApiService {
  users: UsersList [];
  arrUsers: string [];
  loading = true;

  constructor(private httpClient: HttpClient) {
  }

  getUser() {
    return this.httpClient.get('https://randomuser.me/api?results=20');
  }
}
