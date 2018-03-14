import { PostPageComponent } from './components/post-page/post-page.component';
import { NavService } from './services/nav.service';
import { SandboxPageComponent } from './components/sandbox-page/sandbox-page.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule,
  MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule
} from '@angular/material';

import '../rxjs-imports';
import { AppComponent } from './app.component';
import { MarkdownModule } from './modules/markdown/markdown.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BlogService } from './services/blog.service';
import { AppDataService } from './services/app-data.service';
import { BrowserModule } from '@angular/platform-browser';


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
    BrowserModule.withServerTransition({ appId: 'blog-app' }),
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    FormsModule,
    ...materialModules
  ],
  declarations: [
    AppComponent,
    SandboxPageComponent,
    HomePageComponent,
    PostPageComponent
  ],
  providers: [HttpClient, BlogService, NavService, AppDataService],
  bootstrap: [AppComponent]
})
export class AppModuleShared { }
