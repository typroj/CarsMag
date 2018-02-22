import {Component} from '@angular/core';
import {ApiService} from '../service/api-service';
import {Router} from '@angular/router';
import {UsersList} from '../../model/UserList';

@Component({
  selector: 'app-users',
  template: `
    <form (submit)="formSubmit()">
      <button mat-raised-button type="submit" color="primary">submit</button>
    </form>  `,
  styles: []
})
export class SubmitComponent {
  loading = true;
  arr: any;
  users: UsersList [] = [];

  constructor(private service: ApiService, private route: Router) {
  }

  formSubmit() {
    this.route.navigate(['user']);
    this.service.getUser().subscribe(value => {
     console.log(value.results);
    this.loading = false;
    });
  }
}
