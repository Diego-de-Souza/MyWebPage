import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Diego-Dev',
        component: HomeComponent,
    },
    {
        path: 'contato',
        title: 'Contato',
        component: ContatoComponent,
    },
    {
        path: '**',
        redirectTo: '' 
    }
];
