import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaComponent } from './pesquisa.component';

const routes: Routes = [
    {
        path: '',
        component: PesquisaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PesquisaRoutingModule {}
