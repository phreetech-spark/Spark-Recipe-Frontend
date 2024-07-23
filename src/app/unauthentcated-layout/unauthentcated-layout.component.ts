import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-unauthentcated-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './unauthentcated-layout.component.html',
  styleUrl: './unauthentcated-layout.component.css'
})
export class UnauthentcatedLayoutComponent {

}
