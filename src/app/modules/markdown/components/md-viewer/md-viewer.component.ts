import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MdDocument, MdEntityTypeEnum, MarkdownManager } from '@selo/markdown';

@Component({
    selector: 'selo-md-viewer',
    templateUrl: './md-viewer.component.html',
    styleUrls: ['./md-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownViewerComponent implements OnInit, OnChanges {

    @Input() markdownContent;
    mdDocument: MdDocument;
    MdEntityTypeEnum = MdEntityTypeEnum;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        const mdManager = new MarkdownManager();
        this.mdDocument = mdManager.buildDocument(this.markdownContent);
        console.log(this.mdDocument.entities);
    }
}
