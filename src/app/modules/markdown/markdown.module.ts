import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { MarkdownService } from './services/markdown.service';
import { MarkdownLineComponent } from './components/markdown-line/markdown-line.component';

const compExports = [MarkdownViewerComponent];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...compExports, MarkdownLineComponent],
  exports: [...compExports]
})
export class MarkdownModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MarkdownModule,
      providers: [MarkdownService]
    }
  }
}
