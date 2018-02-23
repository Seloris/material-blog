import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { MdText } from './../../../../../../libs/markdown/markdown-manager';
import { MdEntityBaseComponent } from '../md-entity-base.component';

@Component({
    selector: 'app-md-text',
    templateUrl: './md-text.component.html',
    styleUrls: ['./md-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTextComponent extends MdEntityBaseComponent<MdText> {

}
