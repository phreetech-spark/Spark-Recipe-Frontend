import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpperCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  createuser(user:any): Observable<any>{
    return this.http.post("https://spark-recipe.vercel.app/addnewuser",user)
  }
  login(login:any):Observable<any>{
    return this.http.post("https://spark-recipe.vercel.app/userlogin",login)
  }
  addrecipe(recipe:any): Observable<any>{
    return this.http.post("https://spark-recipe.vercel.app/recipe",recipe)
  }
  updateprofile(profile:any):Observable<any>{
    return this.http.post("https://spark-recipe.vercel.app/updateuser",profile)
  }
  forgotpassword(forgotpassword:any):Observable<any>{
    return this.http.post("https://spark-recipe.vercel.app/forgotpassword",forgotpassword)
  }
  resetpassword(resetpassword:any):Observable<any>{
    return this.http.post("https://spark-recipe.vercel.app/resetpassword",resetpassword)
  }
  profileinfo(): Observable<any> {
    return this.http.get("https://spark-recipe.vercel.app/userinformation");
  }
}