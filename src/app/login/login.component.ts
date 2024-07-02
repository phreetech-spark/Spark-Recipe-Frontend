import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform: FormGroup;
  constructor(private fb: FormBuilder, private service: RecipeService) {
    this.loginform = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    })
  }

  submit() {
    console.log(this.loginform.value)
    if (this.loginform.valid) {
      console.log("valid")
      this.service.login(this.loginform.value).subscribe({
        next(value) {
          console.log(value)
        },
        error(err) {
          console.log(err)
        },
      })

    }
    else {
      console.log("invalid")
    }
  }
}


