import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lomitos',
  templateUrl: './lomitos.component.html',
  styleUrls: ['./lomitos.component.css']
})
export class LomitosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irPagos(){
    this.router.navigate(['comprar']);
}
}
