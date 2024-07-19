import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { RecipeService } from '../recipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent implements OnInit{
  @ViewChild("modalcontent")modalcontent?:TemplateRef<any>

  signupform:FormGroup;

  constructor(private fb: FormBuilder,private service:RecipeService,private router:Router,private modalService:NgbModal) {
    this.signupform = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.email] ,
      password: ['', Validators.required] ,
      confirm_password: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    })
  }
  ngOnInit():void{}
  submit(){
    if (this.signupform.valid){
      console.log("valid")
      this.service.createuser(this.signupform.value).subscribe({
        next:(value)=> {
          console.log(value)
        this.router.navigate(["/auth/confirmemail"])
        },
        error(err) {
          console.log(err)
        },
        
      })
    }
  
    else{
      console.log("invalid")
      this.openSm()    }
  }
  openSm() {
		this.modalService.open(this.modalcontent, { size: 'sm' });
	}
}
