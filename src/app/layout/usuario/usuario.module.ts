import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule, UsuarioRoutingModule, PageHeaderModule
  ]
})
export class UsuarioModule { }
