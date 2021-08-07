import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public itemsMenu = [
    { nombre: 'Inicio', icono: 'fas fa-home' },
    { nombre: 'Acerca', icono: 'fas fa-user' },
    { nombre: 'Servicio', icono: 'fas fa-home' },
    { nombre: 'Experiencia', icono: 'fas fa-home' },
    { nombre: 'Otro', icono: 'fas fa-home' },
  ];
  public dato = this.itemsMenu[1];
  public jsonV = { numero1: 1, valorBooleano: true, saludo: 'hola' };
  public datoJ = this.jsonV.saludo;
  public showMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.datoJ);
    for (const item of this.itemsMenu) {
      console.log(item);
    }
  }

  cambioEstadoMenu(): void {
    this.showMenu = !this.showMenu;

    console.log('entro al metodo para cambiar estado', this.showMenu);
  }
}

// class PerroDomestico {
//   public color;
//   public tamaño;
//   constructor() {}
//   ladra() {
//     let nombre1: number = 4;
//     nombre1 = 1;
//     nombre1 = 4;
//     var nombre2 = 'wanda';
//     const nombre3 = 'pamela';
//   }
// }
