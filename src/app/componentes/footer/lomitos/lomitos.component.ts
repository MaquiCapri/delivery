import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Lomito } from './lomitos';

@Component({
  selector: 'app-lomitos',
  templateUrl: './lomitos.component.html',
  styleUrls: ['./lomitos.component.css']
})
export class LomitosComponent implements OnInit {
lomito: Lomito[]=[];

  constructor(private router:Router, private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService.obtenerLomitoDatos().subscribe(data => {
      console.log(data);
     this.lomito = data;
      });
  }

  upQuantity(lomito : Lomito): void{
    if(lomito.stock > lomito.quantity){
      lomito.quantity ++;
      this.deliveryService.addToCartLomito(lomito);
    }
  }

  downQuantity(lomito : Lomito): void{
    if(lomito.quantity > 0){
      lomito.quantity --;
      this.deliveryService.addToCartLomito(lomito);

    }
  }

  verifyPizzasQuantity(lomito : Lomito): void{
if(lomito.stock < lomito.quantity) {
  alert ("No se pueden pedir más de lo que hay en stock");
  lomito.quantity = lomito.stock;
}
  }
  irCarrito(){
    this.router.navigate(['carrito']);
}
irInicio(){
  this.router.navigate(['']);
}
}
