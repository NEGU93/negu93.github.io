export interface IPublication {
    "type": string,
    "authors": [string],
    "title": string,
    "year": any;   // string or Date
    "journal"?: string,
    "location"?: string,
    "url"?: string,
    "publisher": string,
    "pages?": string
}