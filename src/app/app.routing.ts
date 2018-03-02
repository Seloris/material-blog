import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { SandboxPageComponent } from './components/sandbox-page/sandbox-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'sandbox',
        component: SandboxPageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }],
    exports: [RouterModule]
})
export class AppRoutingModule { }
