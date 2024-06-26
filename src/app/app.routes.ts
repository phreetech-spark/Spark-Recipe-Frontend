import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BreakfastsearchComponent } from './breakfastsearch/breakfastsearch.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { TipsandtechniqueComponent } from './tipsandtechnique/tipsandtechnique.component';
import { QuickandeasyComponent } from './quickandeasy/quickandeasy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileEditrecipeComponent } from './profile-editrecipe/profile-editrecipe.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';

export const routes: Routes = [
   {path:'signup',
    component: SignUpComponent},
   {path:'login',
    component: LoginComponent},
    {path:'forgotpassword',
        component:ForgotpasswordComponent
    },
    {
        path:'breakfastsearch',
        component:BreakfastsearchComponent
    },
    {
        path:'confirmation',
        component:ConfirmationComponent
    },
    {
        path:'error',
        component:ErrorComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'footer',
        component:FooterComponent
    },
    {
        path:'tipsandtechnique',
        component:TipsandtechniqueComponent
    },
    {
        path:'quickandeasy',
        component:QuickandeasyComponent
    },
    {
        path:'homepage',
        component:HomepageComponent
    },
    {
        path:'profile-editrecipe',
        component:ProfileEditrecipeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'addrecipe',
        component:AddrecipeComponent
    }
]
