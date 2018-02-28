import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MdEntityBaseComponent } from '../../md-viewer/md-entity-base.component';
import { MdBlockquote } from '@selo/markdown';

@Component({
  selector: 'selo-md-blockquote',
  templateUrl: './md-blockquote.component.html',
  styleUrls: ['./md-blockquote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdBlockquoteComponent extends MdEntityBaseComponent<MdBlockquote> {
}
