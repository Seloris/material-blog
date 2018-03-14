
import { MdEntityTypeEnum } from './md-entities';
import { MdText } from './md-text';

export class MdBlockquote extends MdText {
    type = MdEntityTypeEnum.Blockquote;

    getCleanedContent(): string {
        return this.content.substring(1).trim();
    }
}


