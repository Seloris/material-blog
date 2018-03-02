import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTextComponent } from './components/md-viewer/md-text/md-text.component';
import { MdCodeComponent } from './components/md-viewer/md-code/md-code.component';
import { MarkdownViewerComponent } from './components/md-viewer/md-viewer.component';
import { MdHeaderComponent } from './components/md-viewer/md-header/md-header.component';
import { MdBlockquoteComponent } from './components/md-viewer/md-blockquote/md-blockquote.component';
import { MdListComponent } from './components/md-viewer/md-list/md-list.component';

const compExports = [
    MarkdownViewerComponent,
    MdTextComponent,
    MdCodeComponent,
    MdHeaderComponent,
    MdBlockquoteComponent,
    MdListComponent];


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
        };
    }
}
