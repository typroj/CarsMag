import {Component, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../service/api-service';
import {HttpClient} from '@angular/common/http';
import {UsersList} from '../../model/UserList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myform',
  template: `
    <form (submit)="formSubmit()">
      <button mat-raised-button type="submit" color="primary">submit</button>
    </form>
  `,
  styles: []
})
export class MyFormComponent {
  loading = true;
  arr: any;
  users: UsersList [] = [];

  constructor(private service: ApiService, private route: Router) {
  }

  formSubmit() {
    if (this.service.loading === false) {
      this.route.navigate(['submit', 'user']);
    }
    console.log(this.service.getUser());
    console.log(this.service.getUser());
  }
}
