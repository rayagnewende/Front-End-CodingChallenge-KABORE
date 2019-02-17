export class Shop {
  shop_name:string;
  image:string;
  distance:number;
  
  constructor(shop_name:string,shop_image:string, distance:number )
  {
     this.shop_name  = shop_name;
     this.distance = distance ;
     this.image = shop_image;
  }

}