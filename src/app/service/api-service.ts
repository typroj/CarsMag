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
    this.httpClient.get('https://randomuser.me/api?results=20').subscribe(value => {
      // this.users = value.results;
      console.log(value.results);
      this.arrUsers = value.results;
      this.loading = false;
      console.log(this.loading);
    });
    return this.arrUsers;
  }
}
