import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api-service';

@Component({
  selector: 'app-users',
  template: ``,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    if (this.service.loading === false) {

    }
  }
}
