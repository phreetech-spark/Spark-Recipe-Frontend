import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauthentcated-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './unauthentcated-layout.component.html',
  styleUrl: './unauthentcated-layout.component.css'
})
export class UnauthentcatedLayoutComponent {

}
