import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irComprar(){
    this.router.navigate(['comprar']);
  }
}
