export interface Project {
    id?: string|number,
    projName: string,
    description: string,
    creator: string,
    tags: string[],
    imgUrl?: any,
    projLinks?: string
}