import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
const ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent, data: {titulo: 'Home'}},
            { path: 'table', component: TableComponent, data: {titulo: 'Table'}}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(ROUTES);
