import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // Pour la création du formulaire, c'est la methode reactive qui a été utilisée
  signinForm: FormGroup;
  loginError: string;
 
  constructor(private formBuilder: FormBuilder,
              private authentificationservice: AuthentificationService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]]
    });
  }

  onLoginSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    const user  = new User(email,password);
    this.authentificationservice.signInUser(user).subscribe(
      (response) => {
        // On stocke les données de l'utilisateur connecté avant de lui donner accès à la page d'accueil 
        this.authentificationservice.setUserData(response);
        this.router.navigate(['/shops']);
      },
      (error) => {
        this.loginError = error ;
      }
    ); 
  }

}
