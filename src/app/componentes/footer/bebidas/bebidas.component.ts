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
bebidas: Bebidas[]=[];
  
constructor(private router:Router, private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService.obtenerBebidasDatos().subscribe(data => {
      console.log(data);
     this.bebidas = data;
      });
  }

   upQuantity(bebidas: Bebidas): void{
    if(bebidas.stock > bebidas.quantity){
      bebidas.quantity ++;
      this.deliveryService.addToCartBebidas(bebidas);
    }
  }

  downQuantity(bebidas: Bebidas): void{
    if(bebidas.quantity > 0){
      bebidas.quantity --;
      this.deliveryService.addToCartBebidas(bebidas);

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
