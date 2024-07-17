import { Component, TemplateRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { RecipeService } from '../recipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("modalcontent")modalcontent?:TemplateRef<any>
  loginform:FormGroup;

  constructor(private fb: FormBuilder, private service:RecipeService, private router:Router, private modalService:NgbModal){
    this.loginform = this.fb.group({
    email: ['',Validators.email],
    password: ['',Validators.required],})}

    submit(){
      if (this.loginform.valid){
        console.log("valid")
        this.service.login(this.loginform.value).subscribe({
          next:(value)=> {
            console.log(value)
            const user=value.data
            if (user){
              localStorage.setItem("loggedinuser",JSON.stringify(user))
              this.router.navigate(["/home"])
            }

          },
          error:(err)=> {
            console.log(err)
            this.openSm()
          },
        })

      }
    else{
      console.log("invalid")
    }


  }
  openSm() {
    this.modalService.open(this.modalcontent, { size: 'sm' });
  }
}


