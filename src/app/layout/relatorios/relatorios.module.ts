import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatoriosComponent } from './relatorios.component';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [RelatoriosComponent],
  imports: [
    CommonModule, RelatoriosRoutingModule, PageHeaderModule
  ]
})
export class RelatoriosModule { }
