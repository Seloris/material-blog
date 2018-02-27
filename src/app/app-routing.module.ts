import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxPageComponent } from './components/sandbox-page/sandbox-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/sandbox'
    },
    {
        path: 'sandbox',
        component: SandboxPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
