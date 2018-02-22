import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MyFormComponent} from './form/myForm';
import {UsersComponent} from './components/user.component';
import {AppComponent} from './app.component';

export const routes: Route[] = [

  {path: '', component: AppComponent},
  {
    path: 'submit', component: MyFormComponent,
    children: [
      {path: 'user', component: UsersComponent}
  ]},
  // {path: '**', component: NotFoundComponent}
];
