import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-listall',
  imports: [],
  templateUrl: './listall.html',
  styleUrl: './listall.css',
})
export class Listall implements OnInit {
  constructor(private service:ProductService){}
  // holds received records from service
  bankProducts: Product[] = []
  ngOnInit(): void {
    // quite like useEffect in out react
    this.fetchProducts()
  }
  // caller to the readall service
  fetchProducts(){
    this.service.readAll().subscribe(data=>{
      this.bankProducts=data
    })
  }
}
