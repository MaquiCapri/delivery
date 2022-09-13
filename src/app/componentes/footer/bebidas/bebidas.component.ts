import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irPagos(){
    this.router.navigate(['footer']);
}
}
