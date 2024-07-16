import { Component, TemplateRef, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [ReactiveFormsModule,FooterComponent, RouterModule ],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  @ViewChild("modalcontent")modalcontent?:TemplateRef<any>
  forgotform:FormGroup;
  constructor(private fb: FormBuilder, private service:RecipeService,private modalService:NgbModal){
    this.forgotform = this.fb.group({
    email: ['',Validators.email],
    })}

    submit(){
      if (this.forgotform.valid){
        console.log("valid")
       this.service.forgotpassword(this.forgotform.value).subscribe({
        next:(value)=> {
          console.log(value)
          this.openXl()
        },
        error(err){
          console.log(err)
        }
       })
       
      }
      else{
        console.log("invalid")
      }
    }
  
    openXl() {
      this.modalService.open(this.modalcontent, {size:'xl', centered: true });
    }
}
