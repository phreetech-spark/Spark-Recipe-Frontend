import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent,HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
