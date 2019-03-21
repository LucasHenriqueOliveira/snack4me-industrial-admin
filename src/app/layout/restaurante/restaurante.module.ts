import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante.component';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [RestauranteComponent],
  imports: [
    CommonModule, RestauranteRoutingModule, PageHeaderModule
  ]
})
export class RestauranteModule { }
