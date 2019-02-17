import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

 
  constructor(private http: HttpClient) { }


  getShops():Observable<Shop[]> {
    return this.http.get<Shop[]>("http://127.0.0.1:8080/shops/sorted");
  }

}
