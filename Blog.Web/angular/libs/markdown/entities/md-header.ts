import { MdText } from './md-text';
import { MdEntityTypeEnum } from './md-entities';
import { RegexConstants } from '../../regex.constants';

export class MdHeader extends MdText {
    type = MdEntityTypeEnum.Header;
    level = 0;

    constructor(content: string) {
        super(content);
        this.level = Math.min(RegexConstants.isHeader.exec(content)[1].length, 5);
    }

    getCleanedContent(): string {
        return this.content.substring(this.level).trim();
    }
}
