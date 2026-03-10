import { Routes } from '@angular/router';
import { ProyectoComponent } from './components/proyecto/proyecto';
import { InicioComponent } from './components/inicio/inicio';
import { ContactoComponent } from './components/contacto/contacto';

export const routes: Routes = [
    {
        path: 'inicio',
        title: 'inicio',
        component: InicioComponent
    },
    {
        path: 'proyecto', 
        title: 'proyecto',
        component: ProyectoComponent
    },
    {
        path: 'contacto',
        title: 'contacto',
        component: ContactoComponent

    },
    
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
];
