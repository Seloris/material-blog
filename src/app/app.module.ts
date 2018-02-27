import { SandboxPageComponent } from './components/sandbox-page/sandbox-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MarkdownModule } from './modules/markdown/markdown.module';
import { FormsModule } from '@angular/forms';


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
        SandboxPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
