import { MdText } from './md-text';
import { MdEntityTypeEnum } from './md-entities';
import { RegexConstants } from '../../regex.constants';
import { cleanRegexMatch } from '../../regex.helper';

export class MdList extends MdText {
    type = MdEntityTypeEnum.List;

    constructor(content: string, public level: number) {
        super(content);
    }

    getCleanedContent(): string {
        return cleanRegexMatch(this.content, RegexConstants.cleanList);
    }
}
