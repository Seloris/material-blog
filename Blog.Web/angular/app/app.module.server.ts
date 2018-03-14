import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModuleShared } from './app.module.shared';

@NgModule({
  imports: [
    ServerModule,
    AppModuleShared
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
