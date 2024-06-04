import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  form!:FormGroup//In questa proprietà salveremo l'istanza Della classe FormGroup. Tale classe ci serve per configurare il Form stesso.

  constructor(private fb:FormBuilder){}//Form builder ci aiuta a scrivere con una sintassi un po'contratta la configurazione  del Reactive form.

  ngOnInit(){

    this.form = this.fb.group({//il form
      nome: this.fb.control(null,[Validators.required]),//il campo nome
      cognome: this.fb.control(null),//il campo cognome
      authData: this.fb.group({//il form group chiamato authData
        email:this.fb.control(null,[
          Validators.required,//validatori sincroni
          Validators.email//validatori sincroni
        ]),
        password:this.fb.control(null)
      })
    })

  }

  invia(){
    console.log(this.form.value);//mostra i valori inseriti
  }


  //È consigliabile creare metodi come questo che permettano di rendere più sintetica e pulita la validazione lato HTML.
  isTouchedInvalid(fieldName:string){
    const field = this.form.get(fieldName);//Cerco il campo
    return field?.invalid && field?.touched//Verifico se il campo è valido e se è stato anche toccato
  }




}
