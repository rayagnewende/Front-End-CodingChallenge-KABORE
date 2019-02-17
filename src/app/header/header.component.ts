import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthentificate = false;
  constructor(private authentification:AuthentificationService) { }

  ngOnInit() {
    if(this.authentification.user)
     {
       this.isAuthentificate = true;
     }

  }

}
