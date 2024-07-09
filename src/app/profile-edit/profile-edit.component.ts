import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, } from '@angular/forms';
import { RouterModule,  } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent {
profileform:FormGroup;
constructor(private fb: FormBuilder,private service:RecipeService){
  this.profileform=this.fb.group({
    username:[],
    about:[],
    photo:[],
    profilephoto:[],
    firstname:[],
    lastname:[],
    email:[],
    country:[],
    streetaddress:[],
    city:[],
    state:[],
    phonenumber:[],
    comments:[],
    saves:[],
    newrecipe:[],

  })
}
submit(){
  this.service.updateprofile(this.profileform.value).subscribe({
    next(value) {
      console.log(value)
    },
    error(err) {
      console.log(err)
    }
  })
}
}
