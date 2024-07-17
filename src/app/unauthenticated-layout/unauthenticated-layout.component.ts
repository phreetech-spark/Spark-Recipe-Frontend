import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauthenticated-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './unauthenticated-layout.component.html',
  styleUrl: './unauthenticated-layout.component.css'
})
export class UnauthenticatedLayoutComponent {

}
