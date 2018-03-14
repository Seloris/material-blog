import { Input } from '@angular/core';
import { IMdEntity, MdEntityTypeEnum } from '@selo/markdown';
import { RegexConstants } from '../../../../../libs/regex.constants';

export abstract class MdEntityBaseComponent<T extends IMdEntity> {
    @Input() entity: T;
    get formattedContent() {
        const content = this.entity.getCleanedContent();
        if (this.entity.type !== MdEntityTypeEnum.Code) {
            if (typeof (content) === 'string') {
                return this.markdownToHtml(content);
            } else {
                return content.map(mdTxt => this.markdownToHtml);
            }
        }

        return content;
    }

    private markdownToHtml(mdText: string): string {
        mdText = this.markDownEmphasisToHtml(mdText);
        return this.markDownStrike(mdText);

    }

    private getSpan(htmlClass: string, value: string) {
        return `<span class="${htmlClass}">${value}</span>`;
    }

    private markDownEmphasisToHtml(mdText: string): string {
        let match = RegexConstants.emphasis.exec(mdText);
        while (match !== null) {
            const emphasisClass = match[1].length === 1 ? 'italic' : 'bold';
            mdText = mdText.replace(match[0], this.getSpan(emphasisClass, match[2]));
            match = RegexConstants.emphasis.exec(mdText);
        }

        return mdText;
    }

    private markDownStrike(mdText: string): string {
        let match = RegexConstants.strike.exec(mdText);
        while (match !== null) {
            mdText = mdText.replace(match[0], this.getSpan('strike', match[1]));
            match = RegexConstants.strike.exec(mdText);
        }

        return mdText;
    }
}
