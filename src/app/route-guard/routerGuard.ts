import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {UsersComponent} from '../components/user.component';
import {ApiService} from '../service/api-service';
import {SubmitComponent} from '../components/submit';

@Injectable()

export class Guard implements CanActivate {

  constructor(private submit: SubmitComponent) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.submit.load$.subscribe(value => value)) {
      return true;
    } else {
    return false;
    }
  }
}
