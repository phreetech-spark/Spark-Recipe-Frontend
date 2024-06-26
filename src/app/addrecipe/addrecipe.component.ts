import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule ,FormBuilder,Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-addrecipe',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './addrecipe.component.html',
  styleUrl: './addrecipe.component.css'
})
export class AddrecipeComponent {
  addrecipe:FormGroup;
  constructor(private fb: FormBuilder,private service:RecipeService){
    this.addrecipe = this.fb.group({
      title: ['', Validators.required,
      ],
      url: ['', Validators.required] ,
      image: ['', Validators.required] ,
      publisher: ['', Validators.required],
      preptime: ['', Validators.required],
      servings: ['', Validators.required],
      ingredients:['',Validators.required],
      instructions:['',Validators.required]
    })
  }
  submit(){
    if (this.addrecipe.valid){
      console.log("valid")
      this.service.addrecipe(this.addrecipe.value).subscribe({
        next(value) {
          console.log(value)
        },
        error(err) {
          console.log(err)
        },
      }
        
      )
    }
  
    else{
      console.log("invalid")
    }
  }

}
