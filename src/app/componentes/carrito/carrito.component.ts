import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Bebidas } from '../footer/bebidas/bebidas';
import { Hamburguesa } from '../footer/hamburguesas/hamburguesa';
import { Lomito } from '../footer/lomitos/lomitos';
import { Pizza } from '../footer/pizzas/pizza';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  pizza: Pizza[] = [];
  lomito: Lomito[] = [];
  bebidas: Bebidas[] = [];
  hamburguesa: Hamburguesa[] = [];

  constructor(private deliveryService: DeliveryService, private router: Router) { }

  ngOnInit(): void {
    this.deliveryService.lomito
      .subscribe(data => this.lomito = data);

    this.deliveryService.pizza
      .subscribe(data => this.pizza = data);

    this.deliveryService.bebidas
      .subscribe(data => this.bebidas = data);

    this.deliveryService.hamburguesa
      .subscribe(data => this.hamburguesa = data);
  }

  borrarCarrito() {
    this.deliveryService.borrarCarrito();
  }

  total() {
    let sum = 0;

    this.pizza.forEach(pizza => {
      sum += pizza.quantity * pizza.price
    }),
      this.lomito.forEach(lomito => {
        sum += lomito.quantity * lomito.price
      }),

      this.hamburguesa.forEach(hamburguesa => {
        sum += hamburguesa.quantity * hamburguesa.price
      }),

      this.bebidas.forEach(bebidas => {
        sum += bebidas.quantity * bebidas.price
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
