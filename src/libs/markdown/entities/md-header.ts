import { MdText } from './md-text';
import { MdEntityTypeEnum } from './md-entities';

export class MdHeader extends MdText {
    type = MdEntityTypeEnum.Header;
    level = 0;

    constructor(content: string) {
        super(content);
        const limit = Math.min(content.length, 5);
        while (this.level < limit) {
            if (content[this.level] !== '#') {
                break;
            }

            this.level++;
        }
    }
    getCleanedContent(): string {
        return this.content.substring(this.level);
    }
}