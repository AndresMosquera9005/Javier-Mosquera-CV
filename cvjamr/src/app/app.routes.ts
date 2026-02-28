import { Routes } from '@angular/router';
import { Proyecto } from './components/proyecto/proyecto';
import { Inicio } from './components/inicio/inicio';
// import { ProyectoComponent } from './components/proyecto/proyecto.component';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'proyecto', component: Proyecto },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
    
];
