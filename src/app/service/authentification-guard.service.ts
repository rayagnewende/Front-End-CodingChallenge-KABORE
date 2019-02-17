import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardService implements CanActivate{

  constructor( private authService: AuthentificationService, 
              private router:Router) { }


  canActivate( ): Observable<boolean> | Promise<boolean> | boolean {
               
                if(this.authService.user)
                {
                    return true;
                }else {
                    return this.router.navigate(['/signin']);
                }
            }  

  
  


}
