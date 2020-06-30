import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      PagesComponent,
      HomeComponent,
      TableComponent
    ],
    exports: [
        PagesComponent,
        HomeComponent,
        TableComponent
    ],
    imports: [
      SharedModule,
      CommonModule,
      FormsModule,
      BrowserModule,
      HttpClientModule,
      PAGES_ROUTES
    ],
    providers: [
      UserService
    ],
    // bootstrap: [AppComponent]
  })

  export class PagesModule{}

