import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from './pizza';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizza: Pizza[] = [{
    name: "Pizza Napolitana",
    image: "./assets/pizzaNapolitana.jpg",
    description: "Muzzarella, tomate y aceitunas negras",
    quantity: 0,
    price: 1100,
    stock: 10,
    clearance: false
  },
  {
    name: "Pizza Fugazzeta",
    image: "./assets/pizzaNapolitana.jpg",
 description: "Muzzarella, cebolla y aceitunas negras",
    quantity: 0,
    price: 1300,
    stock: 6,
    clearance: false

  },
  {
    name: "Pizza Especial",
    description: "Muzzarella, tomate, rucula y aceitunas negras",
    quantity: 0,
    price: 1700,
    stock: 3,
    image: "./pizzaNapolitana.jpg",
    clearance: true
    }
  ]

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    }

  upQuantity(pizza : Pizza): void{
    if(pizza.stock > pizza.quantity){
      pizza.quantity ++;
    }
  }

  downQuantity(pizza : Pizza): void{
    if(pizza.quantity > 0){
      pizza.quantity --;
    }
  }

  verifyPizzasQuantity(pizza : Pizza): void{
if(pizza.stock < pizza.quantity) {
  alert ("No se pueden pedir más de las pizzas que hay en stock");
  pizza.quantity = pizza.stock;
}
 
if(pizza.quantity < 0){
  alert ("No se puede pedir menos pizzas que 0");
  pizza.quantity = 0;
}
 }
  // this.datosDelivery.obtenerDatos().subscribe(data => {
  // console.log(data);
  // this.miDelivery = data;
  // });
  // }

  // }
  // irPagos() {
  // this.router.navigate(['comprar']);
  // }

  // irInicio() {
  // this.router.navigate(['']);
  // }
}
