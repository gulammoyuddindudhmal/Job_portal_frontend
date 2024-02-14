export interface User {
    id:number,
    email:string,
    password:string,
    firstName:string,
    lastName:string,
    phone:string,
    resume:string,
    portfolioURL:string | null,
    roles:number[],
    referrer:string | null,
    sendUpdates:boolean,
    profilePhoto:string |null,
    percentage:number,
    yop:string,
    qualification:string,
    stream:string,
    college:string,
    otherCollege:string,
    collegelocation:string,
    applicantType:string,
    yoe:number |null,
    currentCTC:string | null,
    expectedCTC:string | null,
    expertise:string[] | null,
    otherExp:string | null,
    familiar:string[],
    otherFam:string | null,
    onNotice:boolean,
    noticeEnd:string | null,
    noticeDuration:string | null,
    haveAppeared:boolean,
    roleAppeared:string | null
}