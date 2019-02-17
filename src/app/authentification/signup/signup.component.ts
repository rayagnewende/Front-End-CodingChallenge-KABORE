import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupError: string;
  
  constructor(private formBuilder: FormBuilder,
              private authentificationservice: AuthentificationService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]]
    });
  }

  onSignUpSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const user  = new User(email,password);
    /*
    * createNewUser renvoie un Observable, donc nous pouvons utiliser la methode subscribe pour observer 
    * l'information envoyer par l'Observable
    */
    this.authentificationservice.createNewUser(user).subscribe(
     (response) => {
        // On stocke les données de l'utilisateur connecté avant de lui donner accès à la page d'accueil 
        this.authentificationservice.setUserData(response);
       this.router.navigate(['/shops']);
     },
     (error) => {
      this.signupError = error;
     }
   );       
  }

  
}
