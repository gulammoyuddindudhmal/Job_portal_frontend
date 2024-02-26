export interface User {
    email:string,
    firstName:string,
    lastName:string,
    phone:string,
    roles:number[],
    portfolioURL:string | null,
    resume:string | null,
    profilePhoto:string |null,
    referrer:string | null,
    sendUpdates:boolean,
    percentage:number,
    yop:string,
    qualification:string,
    stream:string,
    college:string,
    otherCollege:string,
    collegelocation:string,
    applicantType:boolean,
    yoe:number |null,
    currentCTC:string | null,
    expectedCTC:string | null,
    expertise:string[] ,
    otherExp:string | null,
    familiar:string[],
    otherFam:string | null,
    onNotice:boolean,
    noticeEnd:string | null,
    noticeDuration:number | null,
    haveAppeared:boolean,
    roleAppeared:string | null
}
