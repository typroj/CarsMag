import {Route} from '@angular/router';
import {UsersComponent} from './components/user.component';
import {AppComponent} from './app.component';
import {SubmitComponent} from './components/submit';
import {Guard} from './route-guard/routerGuard';

export const routes: Route[] = [

  {path: '', component: SubmitComponent},
  {path: 'user', component: UsersComponent, canActivate: [Guard]}
  ,
  // {path: '**', component: NotFoundComponent}
];
