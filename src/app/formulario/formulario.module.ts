import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent } from './contactos/contactos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContactosComponent
  ]
})
export class FormularioModule { }
