import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MarkdownModule } from './modules/markdown/markdown.module';
import { FormsModule } from '@angular/forms';
import { SandboxComponent } from './components/sandbox/sandbox.component';


const materialModules = [MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        MarkdownModule.forRoot(),
        FormsModule,
        ...materialModules
    ],
    declarations: [
        AppComponent,
        SandboxComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
