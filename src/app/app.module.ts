import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './service/api-service';
import {UsersComponent} from './components/user.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {SubmitComponent} from './components/submit';


@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
