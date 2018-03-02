import { SandboxPageComponent } from './components/sandbox-page/sandbox-page.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MarkdownModule } from './modules/markdown/markdown.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';


const materialModules = [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
        FormsModule,
        ...materialModules
    ],
    declarations: [
        AppComponent,
        SandboxPageComponent,
        HomePageComponent
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
