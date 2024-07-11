import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,FooterComponent,RouterModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  resetform:FormGroup;
  constructor(private fb: FormBuilder){this.resetform = this.fb.group({
    password: ['',Validators.required],
    confirmpassword: ['',Validators.required],})}

    submit(){
      if (this.resetform.valid){
        console.log("valid")
      }
      else{
        console.log("invalid")
      }
    }
    
  

}
