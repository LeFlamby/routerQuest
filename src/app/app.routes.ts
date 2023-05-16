import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
const ROUTES: Routes = [
    { path: '', redirectTo: 'user-profile', pathMatch: 'full'},
    { path: 'menu', component: MenuComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user', component: UserComponent },
  ];
  export { ROUTES };

  