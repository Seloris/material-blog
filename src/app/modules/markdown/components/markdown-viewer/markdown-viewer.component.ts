import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MarkdownManager } from '../../../../../libs/markdown/markdown-manager';

@Component({
    selector: 'app-markdown-viewer',
    templateUrl: './markdown-viewer.component.html',
    styleUrls: ['./markdown-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownViewerComponent implements OnInit, OnChanges {

    @Input() markdownContent;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        const mdManager = new MarkdownManager();
        mdManager.buildDocument(this.markdownContent);
    }
}
