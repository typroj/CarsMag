import {Route} from '@angular/router';
import {UsersComponent} from './components/user.component';
import {AppComponent} from './app.component';
import {SubmitComponent} from './components/submit';

export const routes: Route[] = [

  {path: '', component: SubmitComponent},
  {path: 'user', component: UsersComponent}
  ,
  // {path: '**', component: NotFoundComponent}
];
