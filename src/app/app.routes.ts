import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BreakfastsearchComponent } from './breakfastsearch/breakfastsearch.component';
import { ProfileComponent } from './profile/profile.component';
import { TipsandtechniqueComponent } from './tipsandtechnique/tipsandtechnique.component';
import { QuickandeasyComponent } from './quickandeasy/quickandeasy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileEditrecipeComponent } from './profile-editrecipe/profile-editrecipe.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { ConfirmedEmailComponent } from './confirmed-email/confirmed-email.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UnauthenticatedLayoutComponent } from './unauthenticated-layout/unauthenticated-layout.component';
import { AuthenticatedLayoutComponent } from './authenticated-layout/authenticated-layout.component';
import { isLoggedInGuard } from './is-logged-in.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: UnauthenticatedLayoutComponent,
    children: [
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
      },
      {
        path: 'confirmed-email',
        component: ConfirmedEmailComponent
      },
      {
        path: 'resetpassword',
        component: ResetpasswordComponent
      },
    ]
  },
  {
    path: '',
    canActivate: [isLoggedInGuard],
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: 'breakfastsearch',
        component: BreakfastsearchComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'tipsandtechnique',
        component: TipsandtechniqueComponent
      },
      {
        path: 'quickandeasy',
        component: QuickandeasyComponent
      },
      {
        path: 'profile-editrecipe',
        component: ProfileEditrecipeComponent
      },
      {
        path: 'addrecipe',
        component: AddrecipeComponent
      },
      {
        path: 'accountmanagement',
        component: AccountManagementComponent
      },
      {
        path: 'profile-edit',
        component: ProfileEditComponent
      },
      {
        path: 'confirmemail',
        component: ConfirmemailComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]
  },
  // {
  //   path: 'homepage',
  //   component: HomepageComponent
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]
