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
  hamburguesa: Hamburguesa[]=[];
 
constructor(private router: Router, private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService.obtenerHamburguesaDatos().subscribe(data => {
      console.log(data);
     this.hamburguesa = data;
      });
    }

    
  upQuantity(hamburguesa : Hamburguesa): void{
    if(hamburguesa.stock > hamburguesa.quantity){
      hamburguesa.quantity ++;
      this.deliveryService.addToCartHamburguesa(hamburguesa);
    }
  }

  downQuantity(hamburguesa : Hamburguesa): void{
    if(hamburguesa.quantity > 0){
      hamburguesa.quantity --;
      this.deliveryService.addToCartHamburguesa(hamburguesa);

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
