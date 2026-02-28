import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'proyecto',
        loadComponent: () => import('./components/proyecto/proyecto').then(m => m.Proyecto)
    }
];
