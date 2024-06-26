import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [ReactiveFormsModule,FooterComponent, RouterModule ],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {forgotform:FormGroup;
  constructor(private fb: FormBuilder){this.forgotform = this.fb.group({
    email: ['',Validators.email],
    })}

    submit(){
      if (this.forgotform.valid){
        console.log("valid")
      }
      else{
        console.log("invalid")
      }
    }
  

}
