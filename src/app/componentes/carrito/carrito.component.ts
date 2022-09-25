import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Lomito } from '../footer/lomitos/lomitos';
import { Pizza } from '../footer/pizzas/pizza';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
 
  pizza: Pizza[] = [];
  lomito: Lomito[]= []; 
  
  constructor(private deliveryService:DeliveryService, private router: Router ) {}

  ngOnInit(): void {
    this.deliveryService.lomito
    .subscribe(data => this.lomito = data);
    
    this.deliveryService.pizza
.subscribe(data => this.pizza = data); 

 
  }

 borrarCarrito(){
  this.deliveryService.borrarCarrito();
 }
 
   total(){
    let sum=0;

    this.pizza.forEach(pizza => {
     sum+= pizza.quantity * pizza.price
    });
    return sum;

   }
   
  
    irPagos() {
    this.router.navigate(['comprar']);
    }

    irInicio() {
      this.router.navigate(['']);
      }
}
