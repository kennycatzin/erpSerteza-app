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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    UsuariosComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
