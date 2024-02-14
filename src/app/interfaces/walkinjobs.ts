import { Roles } from "./roles"

export interface Walkinjobs {
    id:number,
    title:string,
    date:string,
    city:string,
    extraInfo:string|null,
    expiresIn:number|null,
    location:{
        venue:string,
        address:string,
        pincode:string,
        phone:string
    }
    roles:Roles[],
    timeslots:{
        id:number,
        time:string
    }[],
    genIns:string[],
    examIns:string[],
    sysReq:string[],
    process:string[]
}
