import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  

  constructor(private service:RecipeService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.service.profileinfo().subscribe(
      data => {
        this.profile = data;
      },
      error => {
        console.error('Error fetching profile data', error);
      }
    );
  }
}
