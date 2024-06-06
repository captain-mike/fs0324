import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizza } from './Models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze';

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<iPizza[]>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<iPizza>(`${this.apiUrl}/${id}`)
  }

  create(newPizza:Partial<iPizza>){
    return this.http.post<iPizza>(this.apiUrl, newPizza)
  }

  update(pizza:iPizza){
    return this.http.put(`${this.apiUrl}/${pizza.id}`,pizza)
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }


}
