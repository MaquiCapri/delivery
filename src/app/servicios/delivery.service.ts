import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bebidas } from '../componentes/footer/bebidas/bebidas';
import { Hamburguesa } from '../componentes/footer/hamburguesas/hamburguesa';
import { Lomito } from '../componentes/footer/lomitos/lomitos';
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
 
  private _lomito: Lomito[] = [];
 private _lomitoSubjects: BehaviorSubject<Lomito[]> = new BehaviorSubject(this._lomito);
  public lomito: Observable<Lomito[]> = this._lomitoSubjects.asObservable();

  private _bebidas: Bebidas[] = [];
  private _bebidasSubjects: BehaviorSubject<Bebidas[]> = new BehaviorSubject(this._bebidas);
   public bebidas: Observable<Bebidas[]> = this._bebidasSubjects.asObservable();
 
   private _hamburguesa: Hamburguesa[] = [];
  private _hamburguesaSubjects: BehaviorSubject<Hamburguesa[]> = new BehaviorSubject(this._hamburguesa);
   public hamburguesa: Observable<Hamburguesa[]> = this._hamburguesaSubjects.asObservable();
   
   constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }

  obtenerLomitoDatos(): Observable<any> {
    return this.http.get('assets/data/dataLomito.json');
  }

  obtenerBebidasDatos(): Observable<any> {
    return this.http.get('assets/data/dataBebidas.json');
  }

  obtenerHamburguesaDatos(): Observable<any> {
    return this.http.get('assets/data/dataHamburguesa.json');
  }


 addToCart(pizza: Pizza) {
    let index = this._pizza.findIndex(b => b.name === pizza.name);
    if (index === -1)
      this._pizza.push(pizza);
    else
      this._pizza[index].quantity = pizza.quantity;

    if (pizza.quantity == 0) {
      this._pizza.splice(index, 1);
    }
  };

  addToCartLomito(lomito: Lomito) {
    let index = this._lomito.findIndex(b => b.name === lomito.name);
    if (index === -1)
      this._lomito.push(lomito);
    else
      this._lomito[index].quantity = lomito.quantity;

    if (lomito.quantity == 0) {
      this._lomito.splice(index, 1);
    }
  }

  addToCartBebidas(bebidas: Bebidas) {
    let index = this._bebidas.findIndex(b => b.name === bebidas.name);
    if (index === -1)
      this._bebidas.push(bebidas);
    else
      this._bebidas[index].quantity = bebidas.quantity;

    if (bebidas.quantity == 0) {
      this._bebidas.splice(index, 1);
    }
  }
  addToCartHamburguesa(hamburguesa: Hamburguesa) {
    let index = this._hamburguesa.findIndex(b => b.name === hamburguesa.name);
    if (index === -1)
      this._hamburguesa.push(hamburguesa);
    else
      this._hamburguesa[index].quantity = hamburguesa.quantity;

    if (hamburguesa.quantity == 0) {
      this._hamburguesa.splice(index, 1);
    }
  }

  
 borrarCarrito() {
    this._pizza.splice(0, this._pizza.length);
  }

}
