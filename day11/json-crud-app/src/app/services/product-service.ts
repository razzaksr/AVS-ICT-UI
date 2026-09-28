import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dbUrl = 'http://localhost:3000/products'
  constructor(private client:HttpClient){}
  // read all bank products
  readAll():Observable<Product[]>{
    return this.client.get<Product[]>(this.dbUrl)
  }
  // post/ create a new bank product
  save(bank:Product):Observable<Product>{
    console.log(bank)
    // post<Class>(url,request body data)
    return this.client.post<Product>(this.dbUrl,bank)
  }
}
