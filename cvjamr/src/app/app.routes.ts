import { Routes } from '@angular/router';
import { ProyectoComponent } from './components/proyecto/proyecto';
import { InicioComponent } from './components/inicio/inicio';
import { ContactoComponent } from './components/contacto/contacto';
import { EstudiosComponent } from './components/estudios/estudios';

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
        path: 'estudio',
        title: 'estudio',
        component: EstudiosComponent
    },
    
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
];
