import { Component } from '@angular/core';

@Component({
  selector: 'app-listadoropa',
  templateUrl: './listadoropa.component.html',
  styleUrls: ['./listadoropa.component.css']
})
export class ListadoropaComponent {
  // public personas :string = "hola";
  public inventario: any = [{
    id: 1,
    nombre: "Pantalon",
    precio: 250
  },
  {
    id: 2,
    nombre: "Chamarra",
    precio: 500
  }
];
public formulario: any = {
  id: null,
  nombre: null,
  precio: null
};

public seleccionar(articulos: any): void {
  this.formulario.id = articulos.id;
  this.formulario.nombre = articulos.nombre;
  this.formulario.precio = articulos.precio;
};
public eliminar(id: number): void {
  for (let index = 0; index < this.inventario.length; index++)
    if (this.inventario[index].id == id) {
      this.inventario.splice(index, 1);
      alert("Eliminado con exito !!");
      break;
    };
};
public agregar(): void {
  if (this.formulario.id != null && this.formulario.nombre != null && this.formulario.precio != null) {
    this.inventario.map((inventario: any) => {
      if (inventario.id === this.formulario.id) {
        this.limpiar();
        throw alert('el id ya existe')
      };
    });
    let datoNuevo = {
      id: this.formulario.id,
      nombre: this.formulario.nombre,
      precio: this.formulario.precio
    };
    this.inventario.push(datoNuevo);
    this.limpiar();
    alert("Agregado con exito !!");
  } else {
    alert("Uno de sus campos esta vacio")
  }

};
public editar(id: any): void {
  if (!id || !this.formulario.nombre || !this.formulario.precio) throw alert('no existe ningun id')
  let index = this.inventario.findIndex((ropa: any) => ropa.id === id)
  if (index === -1) {
    this.limpiar();
    throw alert("No puedes editar")
  }
  if (this.inventario[index].id == id) {
    this.inventario[index].id = this.formulario.id;
    this.inventario[index].nombre = this.formulario.nombre;
    this.inventario[index].precio = this.formulario.precio;
    this.limpiar();
    alert("Se ha modificado con exito !!");
  }
};
public limpiar(): void {
  this.formulario.id = null;
  this.formulario.nombre = null;
  this.formulario.precio = null;
}

};
