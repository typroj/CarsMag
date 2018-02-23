import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UsersList} from '../../model/UserList';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class ApiService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getUser(): Observable<UsersList []> {
    return this.httpClient.get('https://randomuser.me/api?results=20').map((value) => {
      const users = value.results;
      return users;
    });
  }
}
