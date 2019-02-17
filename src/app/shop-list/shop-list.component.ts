import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shop.model';
import { ShopsService } from '../service/shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shops:Shop[]; 
  constructor(private shopservice:ShopsService) { }

  ngOnInit() {

    this.shopservice.getShops().subscribe(
      (data) => {
        this.shops = data;
        console.log(this.shops);
      }, 
      (error) => {
        console.log("il y a eu un probleme");
      }
    )
  }

}
