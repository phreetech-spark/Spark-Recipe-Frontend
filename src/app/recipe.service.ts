import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  createuser(user:any): Observable<any>{
    return this.http.post("http://localhost:3001/add_new_user",user)
  }
  addrecipe(recipe:any): Observable<any>{
    return this.http.post("http://localhost:3001/addrecipe",recipe)
  }
  login(login:any):Observable<any>{
    return this.http.post("http://localhost:3001/userlogin",login)
  }
}
