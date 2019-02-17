import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shop.model';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferred-shop',
  templateUrl: './preferred-shop.component.html',
  styleUrls: ['./preferred-shop.component.css']
})
export class PreferredShopComponent implements OnInit {

  // cet objet va contenir la liste des magasins que l'utilisateur a aimé
  shops:Shop[];

  constructor(
              private authService:AuthentificationService,
              private router:Router) { }

  ngOnInit() {
    this.shops = this.authService.user.shops ;
  }


  onRemoveShop(index:number)
  {
    this.shops.splice(index,1);
  }

}
