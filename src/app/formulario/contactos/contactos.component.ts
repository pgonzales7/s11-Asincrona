import { Component } from '@angular/core';
import { Registro } from 'src/app/modulo/registro';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {

  model: Registro = {nombre: "", email: "", mensaje: ""}

  Enviar(){
    if(this.model){
      
      this.valido = true;

    }
  }
}
