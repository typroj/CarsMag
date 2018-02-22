import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {Mailer} from './mailer';
import {AdvanceMailer} from './advance-mailer';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyFormComponent} from './form/myForm';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './service/api-service';
import {UsersComponent} from './components/user.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyFormComponent,
    UsersComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [Mailer, {provide: 'GOOGLE_ANALYTICS_ID', useValue: 10}, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
