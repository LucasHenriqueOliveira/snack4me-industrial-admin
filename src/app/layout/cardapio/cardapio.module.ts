import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [CardapioComponent],
  imports: [
    CommonModule, CardapioRoutingModule, PageHeaderModule
  ]
})
export class CardapioModule { }
