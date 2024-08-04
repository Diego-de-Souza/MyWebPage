import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ConhecimentoComponent } from './pages/conhecimento/conhecimento.component';

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
        path: 'conhecimento',
        title: 'conhecimento',
        component: ConhecimentoComponent,
    },
    {
        path: '**',
        redirectTo: '' 
    }
];
