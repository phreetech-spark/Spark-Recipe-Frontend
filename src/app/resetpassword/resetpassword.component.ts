import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,FooterComponent,RouterModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  @ViewChild("modalcontent")modalcontent?:TemplateRef<any>
  resetform:FormGroup;
  constructor(private fb: FormBuilder,private service:RecipeService, private modalService:NgbModal){
    
    this.resetform = this.fb.group({
    newPassword: ['',Validators.required],
    confirm_password: ['',Validators.required],})}

    submit(){
      if (this.resetform.valid){
        console.log("valid")
        this.service.resetpassword(this.resetform.value).subscribe({
          next:(value)=> {
            console.log(value)
            this.openXl()
          },
          error(err) {
            console.log(err)
          },
        })
        
    
      }
      else{
        console.log("invalid")
      }
    }
    
    openXl() {
      this.modalService.open(this.modalcontent, { size: 'xl', centered: true });
    }
}
