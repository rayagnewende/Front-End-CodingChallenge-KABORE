import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../models/shop.model';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.css']
})
export class ShopListItemComponent implements OnInit {

  @Input() shop_name:string ;
  @Input() shop_image:string ;
  @Input() distance:number;
  @Input() index:number;

  constructor(private authService:AuthentificationService) { }

  ngOnInit() {
  }

  onLikeSubmit()
  {
    const shop = new Shop(this.shop_name,this.shop_image,this.distance);
    const user = this.authService.user ;
    user.shops.push(shop);
    this.authService.setUserData(user);
  }

}
