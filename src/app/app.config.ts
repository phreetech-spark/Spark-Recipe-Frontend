import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { BreakfastsearchComponent } from './breakfastsearch/breakfastsearch.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { TipsandtechniqueComponent } from './tipsandtechnique/tipsandtechnique.component';
import { QuickandeasyComponent } from './quickandeasy/quickandeasy.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ErrorComponent } from './error/error.component';

NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgotpasswordComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ProfileComponent,
    BreakfastsearchComponent,
    AddrecipeComponent,
    TipsandtechniqueComponent,
    QuickandeasyComponent,
    ConfirmationComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routes, HttpClient,NgbModule]
})


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient()]
};