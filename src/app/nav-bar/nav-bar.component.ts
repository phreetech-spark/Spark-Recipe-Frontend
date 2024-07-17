import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;


  ngOnInit(): void {
    const data = localStorage.getItem("loggedinuser")
    if (data) {
      const user = JSON.parse(data)
      if (!!user) {
        this.isLoggedIn = true
      }
      else {
        this.isLoggedIn = false
      }
    }
  }
}
