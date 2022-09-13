import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
 
   
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irPizzas(){
    this.router.navigate(['pizzas']);
  }
  irHamburguesas(){
    this.router.navigate(['hamburguesas']);
  }

  irLomitos(){
    this.router.navigate(['lomitos']);
  }

  irBebidas(){
    this.router.navigate(['bebidas']);
  }
}
