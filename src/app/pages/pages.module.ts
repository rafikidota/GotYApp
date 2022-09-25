import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { GotyComponent } from './goty/goty.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    GotyComponent
  ],
  exports: [
    HomeComponent,
    GotyComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
