import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa.component';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [PesquisaComponent],
  imports: [
    CommonModule, PesquisaRoutingModule, PageHeaderModule
  ]
})
export class PesquisaModule { }
