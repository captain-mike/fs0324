import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizzePreferite } from './Models/ipizze-preferite';

@Injectable({
  providedIn: 'root'
})
export class PizzePreferiteService {

  apiUrl:string = 'http://localhost:3000/pizze-preferite';

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<iPizzePreferite[]>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<iPizzePreferite>(`${this.apiUrl}/${id}`)
  }

  getFavouriteByUserId(userId:number){
    return this.http.get<iPizzePreferite[]>(`${this.apiUrl}?userId=${userId}`)
  }

  create(newPizza:Partial<iPizzePreferite>){
    return this.http.post<iPizzePreferite>(this.apiUrl, newPizza)
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
