import { Roles } from "./roles";

export interface Walkins{
    id:number,
    title:string,
    date:string,
    city:string,
    extra_info:string|null,
    roles:Roles[]
}