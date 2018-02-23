import { Input } from '@angular/core';
import { MdEntity, IMdEntity } from '../../../../../libs/markdown/markdown-manager';

export abstract class MdEntityBaseComponent<T extends IMdEntity> {
    @Input() entity: T;
}
