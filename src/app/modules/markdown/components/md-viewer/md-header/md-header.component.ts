import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdEntityBaseComponent } from '../md-entity-base.component';
import { MdHeader } from '@selo/markdown';

@Component({
    selector: 'selo-md-header',
    templateUrl: './md-header.component.html',
    styleUrls: ['./md-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdHeaderComponent extends MdEntityBaseComponent<MdHeader> {
}
