import { IMdEntity, MdMultiLineEntity, MdSingleLineEntity, MdEntity } from './entities/md-entities';
import { MdDocument } from './entities/md-document';
import { MdHeader } from './entities/md-header';
import { MdText } from './entities/md-text';
import { MdList } from './entities/md-list';
import { MdCode } from './entities/md-code';
import { MdBlockquote } from './entities/md-blockquote';
import { RegexConstants } from '../regex.constants';

export class MarkdownManager {
    private lines: string[] = [];
    private mdDocument: MdDocument = new MdDocument();

    private convertMarkdownToArray(md: string): string[] {
        if (!md) {
            return [];
        }

        return md.split('\n');
    }

    public buildDocument(markdownAsString: string) {
        const lines = this.convertMarkdownToArray(markdownAsString);
        this.buildDocumentFromLines(lines);
        return this.mdDocument;
    }


    private buildDocumentFromLines(lines: string[]) {
        let entityBuilt: MdMultiLineEntity = null;
        // https://jsfiddle.net/crkum8mL/19/ test perf .map( substr/[0]) before forEach
        lines.forEach((line: string, i: number) => {
            if (entityBuilt) {
                entityBuilt.pushContent(line);

                if (entityBuilt.isComplete) {
                    this.mdDocument.pushEntity(entityBuilt);
                    entityBuilt = null;
                }
            } else {
                const newEntity = this.mdEntityFactory(line);

                if (newEntity.isComplete) {
                    this.mdDocument.pushEntity(newEntity);
                } else {
                    // currently, only multiline can be incomplete
                    entityBuilt = <MdMultiLineEntity>newEntity;
                }
            }
        });
    }

    private mdEntityFactory(line: string): IMdEntity {
        if (line.length === 0) {
            return new MdText('');
        }

        const firstChar = line[0];

        if (firstChar === '>') {
            return new MdBlockquote(line);
        }

        if (firstChar === '#') {
            return new MdHeader(line);
        }

        if (line.startsWith('```')) {
            return new MdCode(line);
        }

        const match = RegexConstants.isList.exec(line);
        if (match) {
            const level = match[1].length;
            return new MdList(line, Math.min(level, 2));
        }

        return new MdText(line);

    }
}
