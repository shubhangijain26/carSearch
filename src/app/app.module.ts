import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { CarsResultComponent } from './cars-result/cars-result.component';
import { SortCarsComponent } from './sort-cars/sort-cars.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CarsSearchComponent },
      { path: 'search', component: CarsSearchComponent },
      { path: 'cars-list', component: CarsResultComponent },
    ]),
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CarsSearchComponent,
    CarsResultComponent,
    SortCarsComponent,
    NavBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
