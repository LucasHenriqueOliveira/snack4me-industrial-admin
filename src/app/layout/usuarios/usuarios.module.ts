import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule, UsuariosRoutingModule, PageHeaderModule
  ]
})
export class UsuariosModule { }
