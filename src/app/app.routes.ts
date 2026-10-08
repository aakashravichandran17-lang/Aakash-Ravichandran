import { Routes } from '@angular/router';

/**
 * The portfolio is a single page. The home route lazy-loads the page so the
 * initial bundle stays small.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Aakash Ravichandran | Frontend & Full Stack Developer',
  },
  { path: '**', redirectTo: '' },
];
