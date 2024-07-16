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
  @ViewChild("modalcontent")modalcontent?:TemplateRef<any>
profileform:FormGroup;
constructor(private fb: FormBuilder,private service:RecipeService, private modalService:NgbModal){
  this.profileform=this.fb.group({
    username:[],
    about:[],
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
ngOnInit(): void {
}
submit(){
  if (this.profileform.valid){
    console.log("valid")
  this.service.updateprofile(this.profileform.value).subscribe({
    next(value) {
      console.log(value)
  
    },
    error(err) {
      console.log(err)
    }
  })
  this.openSm()
}
}
openSm() {
  this.modalService.open(this.modalcontent, { size: 'sm', centered: true });
}
}
