import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';

const compExports = [MarkdownViewerComponent];


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [...compExports],
    exports: [...compExports]
})
export class MarkdownModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MarkdownModule
        }
    }
}
