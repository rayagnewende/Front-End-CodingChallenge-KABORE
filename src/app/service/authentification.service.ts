import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';


@Injectable() // cette annotation permet d'injecter un autre service dans le service authentification 
export class AuthentificationService {

  user:User ;
  constructor(private http: HttpClient) { }


  createNewUser(user:User):Observable<User>
  {
    return this.http.post<User>("http://127.0.0.1:8080/users", user);
  }

  signInUser(user: User):Observable<User>
  {
     return this.http.post<User>("http://127.0.0.1:8080/users/login", user);

  }

  updateUserInformations(user:User):Observable<User>
  {
    return this.http.put<User>("http://127.0.0.1:8080/users/login",user);
  }


  setUserData(user:User)
  {
    this.user = user;
  }

  SignOutUser()
  {

  }


}
