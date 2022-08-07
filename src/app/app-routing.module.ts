import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFunctionComponent } from './event-function/event-function.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user-auth/sign-in/sign-in.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';

const routes: Routes = [
   { path: 'register', component: SignUpComponent },
   { path: 'login', component: SignInComponent },
   { path: 'home', component: HomeComponent  },
   { path: 'event', component: EventFunctionComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
