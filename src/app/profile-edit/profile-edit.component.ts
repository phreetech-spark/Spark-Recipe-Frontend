import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, } from '@angular/forms';
import { RouterModule,  } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,NavBarComponent],
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
    fullname:[],
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
