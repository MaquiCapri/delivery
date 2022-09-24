import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Hamburguesa } from './hamburguesa';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {
  hamburguesa: Hamburguesa[]=[
    {
      "name": "Hamburguesa Completa",
      "image": "./assets/pizzaFugazzeta1.jpg",
      "description": "Muzzarella, huevo, oregano y aceitunas negras",
      "quantity": 0,
      "price": 1400,
      "stock": 16,
      "clearance": false
  },
  {
      "name": "Hamburguesa Big",
      "image": "./assets/pizzaFugazzeta1.jpg",
      "description": "Muzzarella, huevo, oregano y aceitunas negras",
      "quantity": 0,
      "price": 1400,
      "stock": 16,
      "clearance": false
  },
  {
      "name": "Hamburguesa Simple",
      "image": "./assets/pizzaFugazzeta1.jpg",
      "description": "Queso, tomate",
      "quantity": 0,
      "price": 1300,
      "stock": 26,
      "clearance": false
  } 
  ];
 

  constructor(private router: Router, private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    
    }

    
  upQuantity(hamburguesa : Hamburguesa): void{
    if(hamburguesa.stock > hamburguesa.quantity){
      hamburguesa.quantity ++;
      this.deliveryService.addToCart(hamburguesa);
    }
  }

  downQuantity(hamburguesa : Hamburguesa): void{
    if(hamburguesa.quantity > 0){
      hamburguesa.quantity --;
      this.deliveryService.addToCart(hamburguesa);

    }
  }

  verifyPizzasQuantity(hamburguesa : Hamburguesa): void{
if(hamburguesa.stock < hamburguesa.quantity) {
  alert ("No se pueden pedir más de lo que hay en stock");
 hamburguesa.quantity =hamburguesa.stock;
}
  }
  
 irCarrito() {
     this.router.navigate(['carrito']);
   }
}
