import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CuentasxpagarComponent } from './cuentasxpagar.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { sharedModule } from '../../shared/shared.module';
import { CUENTAS_ROUTES } from './cuentasxpagar.routes';





@NgModule({
  declarations: [
    UsuariosComponent,
    ProveedoresComponent,
    CuentasxpagarComponent,

  ],
  imports: [  
      sharedModule,
      CUENTAS_ROUTES
   
  ],
  exports: [
    UsuariosComponent,
    ProveedoresComponent,
  ],
  providers: [],
  bootstrap: []
})
export class cuentasxpagarModule { }
