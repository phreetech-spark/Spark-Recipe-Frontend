import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, } from '@angular/forms';
import { RouterModule,  } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,NavBarComponent],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit {
  @ViewChild("editProfileSuccessModalContent") editProfileSuccessModalContent?: TemplateRef<any>
profileform:FormGroup;
user:any
constructor(private fb: FormBuilder,private service:RecipeService, private modalService:NgbModal){
  this.profileform=this.fb.group({
    user_name:[],
    about_user:[],
    profilephoto:[],
    full_name:[],
    email_address:[],
    country:[],
    street_address:[],
    city:[],
    state:[],
    phone_number:[],
    comments:[],
    saves:[],
    newrecipe:[],

  })
}
ngOnInit(): void {
  const data = localStorage.getItem("loggedinuser")
  if (data) {
    const user = JSON.parse(data)
    if (user) {
      this.user = user
    }
  }
}
submit(){


    if (this.profileform.valid) {
      console.log("valid")
      const formValue = this.profileform.value;
      formValue.user_id = this.user._id
      const formData= new FormData()
      formData.append('user_name',formValue.user_name);
      formData.append('about_user',formValue.about_user);
      formData.append('profilephoto',formValue.profilephoto);
      formData.append('full_name',formValue.full_name);
      formData.append('email_address',formValue.email_address);
      formData.append('country',formValue.country);
      formData.append('street_address',formValue.street_address);
      formData.append('city',formValue.city);
      formData.append('state',formValue.state);
      formData.append('phone_number',formValue.phone_number);
      this.service.updateprofile(formValue).subscribe({
        next: (value) => {
          console.log(value)
          this.profileform.reset();
          this.openSuccessModal()

        },
        error(err) {
          console.log(err)
        }
      })
    

}
}
openSuccessModal() {
  this.modalService.open(this.editProfileSuccessModalContent, { size: 'lg', centered: true });
}
}
