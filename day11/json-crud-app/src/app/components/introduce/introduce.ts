import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-introduce',
  imports: [FormsModule],
  templateUrl: './introduce.html',
  styleUrl: './introduce.css',
})
export class Introduce {
  pro={
    id:0,
    name:'',
    age:0,
    min:0,
    amenitites:''
  }
  constructor(private service:ProductService){}
  callSave():void{
    this.service.save(this.pro).subscribe(res=>console.log(res))
  }
}
