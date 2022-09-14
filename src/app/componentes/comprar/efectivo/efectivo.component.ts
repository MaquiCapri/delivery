import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-efectivo',
  templateUrl: './efectivo.component.html',
  styleUrls: ['./efectivo.component.css']
})
export class EfectivoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irInicio(){
    this.router.navigate(['']);
  }
}
