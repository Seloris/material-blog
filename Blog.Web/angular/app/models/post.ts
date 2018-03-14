export interface Post {
    id: number;
    title: string;
    url: string;
    summary: string;
    mdContent: string;
    publicationDate: Date;
    tags: string[];
}
