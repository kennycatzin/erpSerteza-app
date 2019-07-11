import { Routes, RouterModule, Router } from '@angular/router';
import { CuentasxpagarComponent } from './cuentasxpagar.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProgressComponent } from './progress/progress.component';
const cuentasRoutes: Routes = [
    { 
        path: '', 
        component: CuentasxpagarComponent,
        children:[
            { path: 'proveedores', component:  ProveedoresComponent},
            { path: 'progress', component:  ProgressComponent},
            { path: 'usuarios', component: UsuariosComponent },
            { path: '', redirectTo: '/proveedores', pathMatch: 'full'},

        ]
    },
];
export const CUENTAS_ROUTES = RouterModule.forChild(cuentasRoutes);