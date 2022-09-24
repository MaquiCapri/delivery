import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Bebidas } from './bebidas';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
bebidas: Bebidas[]=[
  {
    "name": "Hamburguesa Simple",
    "image": "./assets/pizzaFugazzeta1.jpg",
    "description": "Muzzarella, huevo, oregano y aceitunas negras",
    "quantity": 0,
    "price": 1400,
    "stock": 16,
    "clearance": false
},
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

  
  upQuantity(bebidas: Bebidas): void{
    if(bebidas.stock > bebidas.quantity){
      bebidas.quantity ++;
      this.deliveryService.addToCart(bebidas);
    }
  }

  downQuantity(bebidas: Bebidas): void{
    if(bebidas.quantity > 0){
      bebidas.quantity --;
      this.deliveryService.addToCart(bebidas);

    }
  }

  verifyPizzasQuantity(bebidas : Bebidas): void{
if(bebidas.stock < bebidas.quantity) {
  alert ("No se pueden pedir más de lo que hay en stock");
  bebidas.quantity = bebidas.stock;
}
  }
  irCarrito(){
    this.router.navigate(['carrito']);
}

}
