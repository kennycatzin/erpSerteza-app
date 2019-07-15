import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  menu: any = [   
      {titulo: 'Dashboard',icono: 'mdi mdi-gauge', url: '/progress'},
      {titulo: 'AccountSettings', icono: 'mdi mdi-account-check', url: '/account-settings'},
      {titulo: 'usuarios', icono: 'mdi mdi-table', url: '/usuarios'},
      {titulo: 'Proveedores', icono: 'mdi mdi-emoticon', url: '/proveedores'},
      {titulo: 'Salir', icono: 'mdi mdi-user', url: '/login'}  
  ]
  constructor() { }
}
