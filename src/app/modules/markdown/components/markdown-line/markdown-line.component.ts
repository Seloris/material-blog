import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-markdown-line',
  templateUrl: './markdown-line.component.html',
  styleUrls: ['./markdown-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownLineComponent implements OnInit {
  @Input() line: string;

  constructor() { }

  ngOnInit() {
  }

}
