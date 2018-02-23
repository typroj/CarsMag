import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api-service';
import {UsersList} from '../../model/UserList';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {SubmitComponent} from './submit';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-users',
  template: `
    <mat-card *ngFor="let user of arr" matRipple class="mainCard">
    <img [src]="user.picture.thumbnail" alt="">
    <mat-card-header>
    <mat-card-title>{{user.name.title}} {{user.name.first}} {{user.name.last}}</mat-card-title>
    </mat-card-header>
    </mat-card>
  `,
  styles: [`
    :host {
    }

    img {
      margin: 10px;
    }

    .mainCard {
      cursor: pointer;
      background: linear-gradient(#ffffff, #f2f2f2);
      position: relative;
      width: 250px;
      margin: 20px;
      flex-direction: column;
      max-width: 100%;
      align-items: center;
    }`
  ]
})

export class UsersComponent implements OnInit {
  arr: UsersList [];

  constructor(private submit: SubmitComponent, private service: ApiService) {
  }

  ngOnInit() {
    this.service.getUser().subscribe(value => {
      this.arr = value;
    });
  }
}
