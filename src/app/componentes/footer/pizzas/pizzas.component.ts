import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
irPagos(){
  this.router.navigate(['comprar']);
}

irInicio(){
  this.router.navigate(['']);
}
}
