import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './erp/cuentasxpagar/usuarios/usuarios.component';
import { ProveedoresComponent } from './erp/cuentasxpagar/proveedores/proveedores.component';



const APP_ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'proveedores', component:  ProveedoresComponent},
    { path: 'usuarios', component: UsuariosComponent },

];


export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});






