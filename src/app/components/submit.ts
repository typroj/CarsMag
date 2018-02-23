import {Component, EventEmitter, Output} from '@angular/core';
import {ApiService} from '../service/api-service';
import {Router} from '@angular/router';
import {UsersList} from '../../model/UserList';
import {UsersComponent} from './user.component';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-users',
  template: `
    <form (submit)="formSubmit()">
      <button mat-raised-button type="submit" color="primary">submit</button>
    </form>  `,
  styles: []
})
export class SubmitComponent {

  arr: UsersList [];
  load$ = new Subject<boolean>();

  constructor(private service: ApiService, private router: Router) {
    this.load$.next(false);
  }

  formSubmit() {
<<<<<<< HEAD
    this.service.getUser().map((value) => {
      this.load$.next(true);
      this.router.navigate(['user']);
    }).subscribe();
=======
    this.route.navigate(['user']);
>>>>>>> 498fb737f261a24bb3796d23c9de2ee5006f2cc3
  }
}
