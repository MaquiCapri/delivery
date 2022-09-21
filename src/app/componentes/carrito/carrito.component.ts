import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Pizza } from '../footer/pizzas/pizza';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
 
  pizza: Pizza[] = [];
  constructor(private deliveryService:DeliveryService ) {}

  ngOnInit(): void {
    this.deliveryService.pizza
.subscribe(data => this.pizza = data);

  }
 
  total(){
    let sum=0;

    this.pizza.forEach(pizza => {
     sum+= pizza.quantity * pizza.price
    });
    return sum;
   }
}
