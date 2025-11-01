import type { Routes } from '@angular/router';

const childRoutes: Routes = [];

export const routes: Routes = [
    //Deutsch Routes
    { path: '', loadComponent: () => import('./app').then((m) => m.App), data: { lang: 'de' }, children: childRoutes },
    //Englisch Routes
    { path: 'en', loadComponent: () => import('./app').then((m) => m.App), data: { lang: 'en' }, children: childRoutes },
];