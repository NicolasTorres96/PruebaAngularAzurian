import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true});
