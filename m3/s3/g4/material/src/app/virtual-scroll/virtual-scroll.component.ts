import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrl: './virtual-scroll.component.scss'
})
export class VirtualScrollComponent {

  items = Array.from({length:100000}).map((_,i) => `Elemento ${i}`)

}
