import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MarkdownService } from '../../services/markdown.service';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownViewerComponent implements OnInit, OnChanges {

  @Input() markdownContent;

  markdownLines: string[];

  constructor(private mdService: MarkdownService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // temp
    this.markdownLines = this.mdService.getLines(this.markdownContent);
  }
}
