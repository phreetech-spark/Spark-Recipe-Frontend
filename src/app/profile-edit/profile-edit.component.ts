import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, } from '@angular/forms';
import { RouterModule,  } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
    // user_id:[],
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
  if (this.profileform.valid){
    if (this.profileform.valid) {
      console.log("valid")
      const formValue = this.profileform.value;
      formValue.user_id = this.user._id
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
}
openSuccessModal() {
  this.modalService.open(this.editProfileSuccessModalContent, { size: 'lg', centered: true });
}
}
