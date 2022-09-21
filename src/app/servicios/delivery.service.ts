import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pizza } from '../componentes/footer/pizzas/pizza';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private _pizza: Pizza[] = [];//actualice lista de pizzas
  //cree una clase que ayuda a crear obserbables de objetos
  // BehaviorSubject.encapsula al objeto para que alguien lo pueda mirar
  private _pizzaSubjects: BehaviorSubject<Pizza[]> = new BehaviorSubject(this._pizza);
  //hago publico al observable de ese item. el item esta oculto
  public pizza: Observable<Pizza[]> = this._pizzaSubjects.asObservable();
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }

  addToCart(pizza: Pizza) {
    let index = this._pizza.findIndex(b => b.name === pizza.name);
    if (index === -1)
      this._pizza.push(pizza);
    else
      this._pizza[index].quantity = pizza.quantity;
   
      if (pizza.quantity == 0) {
      this._pizza.splice(index,1);
    }
    
  }
}
