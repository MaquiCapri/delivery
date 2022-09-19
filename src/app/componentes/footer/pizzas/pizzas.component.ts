import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizzas } from './pizza';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {


  public pizzas: Pizzas[]  =[ 
    {
   name:"Pizza Napolitana",
    image:"./assets/pizzaNapolitana.jpg",
    description:"Muzzarella, tomate y aceitunas negras",
    quantity: 0,
    price: 1100,
    stock: 4
  },
  {
    name:"Pizza Napolitana",
     image:"./assets/pizzaNapolitana.jpg",
     description:"Muzzarella, tomate y aceitunas negras",
     quantity: 0,
     price: 1100,
     stock: 4
   },
   {
    name:"Pizza Napolitana",
     image:"./assets/pizzaNapolitana.jpg",
     description:"Muzzarella, tomate y aceitunas negras",
     quantity: 0,
     price: 1100,
     stock: 4
   },
  ];

 constructor(private router: Router) { }


  ngOnInit(): void {
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
