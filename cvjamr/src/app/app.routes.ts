import { Routes } from '@angular/router';
import { Proyecto } from './components/proyecto/proyecto';

export const routes: Routes = [
    {
        path: 'proyecto', 
        title: 'proyecto',
        component: Proyecto,
        loadComponent: () => import('./components/proyecto/proyecto').then(m => m.Proyecto)
    },
    
];
