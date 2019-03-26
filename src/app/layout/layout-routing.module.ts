import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'restaurante', loadChildren: './restaurante/restaurante.module#RestauranteModule' },
            { path: 'cardapio', loadChildren: './cardapio/cardapio.module#CardapioModule' },
            { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
            { path: 'relatorios', loadChildren: './relatorios/relatorios.module#RelatoriosModule' },
            { path: 'pesquisa', loadChildren: './pesquisa/pesquisa.module#PesquisaModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
