import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-profile-editrecipe',
  standalone: true,
  imports: [ProfileComponent,RouterModule,HeaderComponent,FooterComponent],
  templateUrl: './profile-editrecipe.component.html',
  styleUrl: './profile-editrecipe.component.css'
})
export class ProfileEditrecipeComponent {

}
