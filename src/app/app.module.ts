import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//import{UserAuthModule} from './user-auth/user-auth.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { EventFunctionComponent } from './event-function/event-function.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavComponent,
    HomeComponent,
    EventFunctionComponent
  ],
  imports: [
    BrowserModule,
   // UserAuthModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
