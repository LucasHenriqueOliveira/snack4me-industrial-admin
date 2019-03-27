import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';

import { ProdutoRoutingModule } from './produto-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule, ProdutoRoutingModule, PageHeaderModule
  ]
})
export class ProdutoModule { }
