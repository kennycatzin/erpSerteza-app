import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { app_routing } from './app.routes';
// import { CuentasxpagarModule } from './erp/cuentasxpagar/cuentasxpagar.module';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { UsuariosComponent } from './erp/cuentasxpagar/usuarios/usuarios.component';
import { ProveedoresComponent } from './erp/cuentasxpagar/proveedores/proveedores.component';
import { CuentasxpagarComponent } from './erp/cuentasxpagar/cuentasxpagar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegistroComponent } from './login/registro.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    UsuariosComponent,
    ProveedoresComponent,
    CuentasxpagarComponent,
    NopagefoundComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
