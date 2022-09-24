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
lomito: Lomito[]=[
  {
    "name": "Lomito Simple",
    "image": "./assets/pizzaFugazzeta1.jpg",
    "description": "Queso, tomate",
    "quantity": 0,
    "price": 1300,
    "stock": 26,
    "clearance": false
},
{
    "name": "Lomito Especial",
    "description": "Tomate, rucula y queso",
    "quantity": 0,
    "price": 1700,
    "stock": 13,
    "image": "./assets/pizzaRucula.jpg",
    "clearance": true
},
{
    "name": "Lomito Completo",
    "image": "./assets/pizzaFugazzeta1.jpg",
    "description": " Jamon, tomate, huevo",
    "quantity": 0,
    "price": 1500,
    "stock": 15,
    "clearance": false
}

];

  constructor(private router:Router, private deliveryService: DeliveryService) { }

  ngOnInit(): void {
  }

  
  upQuantity(lomito : Lomito): void{
    if(lomito.stock > lomito.quantity){
      lomito.quantity ++;
      this.deliveryService.addToCart(lomito);
    }
  }

  downQuantity(lomito : Lomito): void{
    if(lomito.quantity > 0){
      lomito.quantity --;
      this.deliveryService.addToCart(lomito);

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
