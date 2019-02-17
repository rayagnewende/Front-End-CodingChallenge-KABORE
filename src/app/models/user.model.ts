import { Shop } from './shop.model';

export class User {
    id:number ;
    name:string;
    email:string;
    password:string;
    shops:Shop[];
    
    constructor( email:string, password:string)
    {
        this.name = "";
        this.email = email;
        this.password  = password;
    }
  
  }