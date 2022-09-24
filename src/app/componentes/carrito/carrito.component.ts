import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Pizza } from '../footer/pizzas/pizza';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
 
  pizza: Pizza[] = [];
  constructor(private deliveryService:DeliveryService, private router: Router ) {}

  ngOnInit(): void {
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
   
   agregarPrice(pizza: Pizza){
    if(pizza.price ){
   }
   

   }
   irPagos() {
    this.router.navigate(['comprar']);
    }

    irInicio() {
      this.router.navigate(['']);
      }
}
