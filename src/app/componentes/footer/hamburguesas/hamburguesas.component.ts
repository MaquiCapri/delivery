import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irPagos(){
    this.router.navigate(['footer']);
}
}
