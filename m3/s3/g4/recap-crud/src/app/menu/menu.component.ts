import { Component } from '@angular/core';
import { iPizza } from '../Models/ipizza';
import { PizzaService } from '../pizza.service';
import { PizzePreferiteService } from '../pizze-preferite.service';
import { iPizzePreferite } from '../Models/ipizze-preferite';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  pizze:iPizza[] = []
  pizzePreferite:iPizzePreferite[] = []

  constructor(
    private pizzaSvc:PizzaService,
    private pizzaPreferitaSvc:PizzePreferiteService
  ){}

  ngOnInit(){

    this.pizzaSvc.getAll().subscribe(pizze =>{

      this.pizze = pizze

      this.pizzaPreferitaSvc.getAll().subscribe(pizzePreferite =>{
        this.pizzePreferite = pizzePreferite
      })

    })

  }

  toggleFavourite(pizza:iPizza){

    const obj:Partial<iPizzePreferite> = {
      userId: 1,
      pizza: pizza
    }

    //Cerco nell'array delle pizze preferite della riga 15. Se l'attuale pizza è presente, la elimino da quell'array dopo aver fatto una chiamata di delete all'array delle pizze preferite. Se invece non è presente faccio una chiamata create attraverso il service pizze preferite


  }

}
