import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Pizza } from './pizza';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizza: Pizza[] = [];

  constructor(private router: Router, private deliveryService: DeliveryService ) { }
  
  ngOnInit(): void {


    this.deliveryService.obtenerDatos().subscribe(data => {
      console.log(data);
     this.pizza = data;
      });
    }

  upQuantity(pizza : Pizza): void{
    if(pizza.stock > pizza.quantity){
      pizza.quantity ++;
      this.deliveryService.addToCart(pizza);
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

   

   }
  // irPagos() {
  // this.router.navigate(['comprar']);
  // }

  // irInicio() {
  // this.router.navigate(['']);
  // }
  
