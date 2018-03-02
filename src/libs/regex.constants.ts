export namespace RegexConstants {
    export const emphasis = /([\*|_]+)(.*?)[\*|_]+/g;
    export const strike = /~~(.*?)~~/g;

    export const isLine = /(\s*)[-|*]/;
    export const cleanLine = /(\s*[-|*]\s*)/;
}
