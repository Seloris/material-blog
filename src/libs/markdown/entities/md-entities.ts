export enum MdEntityTypeEnum {
    Text,
    Header,
    Code,
    Blockquote,
    List
}

export interface IMdEntity {
    isComplete: boolean;
    type: MdEntityTypeEnum;
    content: string | string[];
    getCleanedContent(): string | string[];
}

export abstract class MdEntity<T extends string | string[]> implements IMdEntity {
    public isComplete: boolean;
    abstract type: MdEntityTypeEnum;
    constructor(public content: T) { }

    abstract getCleanedContent(): T;

}

export abstract class MdMultiLineEntity extends MdEntity<string[]> {
    constructor(content: string[]) {
        super(content);
    }

    pushContent(line: string) {
        this.content.push(line);
        this.isComplete = this.isEndingLine(line);
    }

    abstract isEndingLine(line: string): boolean;
}

export abstract class MdSingleLineEntity extends MdEntity<string> {
    constructor(content: string) {
        super(content);
        this.isComplete = true;
    }
}
