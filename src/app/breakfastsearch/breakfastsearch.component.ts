import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-breakfastsearch',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,HeroComponent],
  templateUrl: './breakfastsearch.component.html',
  styleUrl: './breakfastsearch.component.css'
})
export class BreakfastsearchComponent {

}
