import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CuentasxpagarComponent } from './cuentasxpagar.component';
import {FormsModule} from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { sharedModule } from '../../shared/shared.module';
import { CUENTAS_ROUTES } from './cuentasxpagar.routes';
import { ProgressComponent } from './progress/progress.component';
import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';





@NgModule({
  declarations: [
    UsuariosComponent,
    ProveedoresComponent,
    CuentasxpagarComponent,
    ProgressComponent,
    IncrementadorComponent


  ],
  imports: [  
      sharedModule,
      CUENTAS_ROUTES,
      FormsModule,
      
      
   
  ],
  exports: [
    UsuariosComponent,
    ProveedoresComponent,
  ],
  providers: [],
  bootstrap: []
})
export class cuentasxpagarModule { }
