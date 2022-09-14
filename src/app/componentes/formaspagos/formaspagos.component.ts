import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formaspagos',
  templateUrl: './formaspagos.component.html',
  styleUrls: ['./formaspagos.component.css']
})
export class FormaspagosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irInicio(){
    this.router.navigate(['']);
  }

}
