import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 irTarjetas(){
  this.router.navigate(['tarjetas']);
 }

 irEfectivo(){
  this.router.navigate(['efectivo']);
 }
 irInicio(){
  this.router.navigate(['']);
}


}
