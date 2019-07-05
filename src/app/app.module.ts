import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { app_routing } from './app.routes';
// import { CuentasxpagarModule, cuentasxpagarModule } from './erp/cuentasxpagar/cuentasxpagar.module';
import { cuentasxpagarModule } from './erp/cuentasxpagar/cuentasxpagar.module';



import { LoginComponent } from './login/login.component';



import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegistroComponent } from './login/registro.component';





@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,   
    NopagefoundComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    cuentasxpagarModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
