import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdEntityBaseComponent } from '../md-entity-base.component';
import { MdList } from '@selo/markdown';

@Component({
    selector: 'selo-md-list',
    templateUrl: './md-list.component.html',
    styleUrls: ['./md-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdListComponent extends MdEntityBaseComponent<MdList> {
}
