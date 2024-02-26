import { RoleDetails } from "./role-details"


export interface Walkinjobs {
    id:number,
    title:string,
    date:string,
    city:string,
    extraInfo:string|null,
    roles:RoleDetails[],
    timeslots:{
        id:number,
        time:string
    }[],
    genIns:string,
    examIns:string,
    sysReq:string,
    process:string
}
