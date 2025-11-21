import type { Routes } from '@angular/router';

const childRoutes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
    { path: 'projects', loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects) },
    { path: 'imprint', loadComponent: () => import('./pages/imprint/imprint').then((m) => m.Imprint) },

];

export const routes: Routes = [
    //Deutsch Routes
    { path: '', loadComponent: () => import('./app').then((m) => m.App), data: { lang: 'de' }, children: childRoutes },
    //Englisch Routes
    { path: 'en', loadComponent: () => import('./app').then((m) => m.App), data: { lang: 'en' }, children: childRoutes },
    //Not Found Route
    { path: '**', loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound) },

];