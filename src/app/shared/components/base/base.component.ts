import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styles: []
})
export abstract class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**Metodo para agregar los valores comunes a una Forma (FormGroup)*/
  public addCommonValuesFormGroup(anyForm: FormGroup, dto: any) {
    anyForm.controls["id"].setValue(dto.id);
    anyForm.controls["fecha"].setValue(dto.fecha);
    anyForm.controls["eliminado"].setValue(dto.eliminado);
    anyForm.controls["terminal"].setValue(dto.terminal);
    anyForm.controls["usuarioId"].setValue(dto.usuarioId);
    anyForm.controls["usuarioNombre"].setValue(dto.usuarioNombre);
    anyForm.controls["fechaCreacion"].setValue(dto.fechaCreacion);
    anyForm.controls["terminalCreacion"].setValue(dto.terminalCreacion);
    anyForm.controls["usuarioCreacionId"].setValue(dto.usuarioCreacionId);
    anyForm.controls["usuarioCreacionNombre"].setValue(dto.usuarioCreacionNombre);
}

}
