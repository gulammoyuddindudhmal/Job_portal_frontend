import { Injectable } from '@angular/core';
import { Roles } from '../interfaces/roles';
import { Walkinjobs } from '../interfaces/walkinjobs';
@Injectable({
  providedIn: 'root'
})
export class WalkinService {
  roles:Roles[]
  walkinJobs:Walkinjobs[]
  constructor() {
    this.roles=[
      {
        id:0,
        title:"Instructional Designer",
        img:"../../assets/Instructional Designer.svg",
        package:"Rs. 5,00,000 lpa",
        description:[
          "Generate highly interactive and innovative instructional strategies for e-learning solutions",
          " Develop course structure and learning specifications addressing the requirements of the target audience ",
          " Address usability issues",
          " Keep abreast of new trends in e-learning",
          " Ensure that the instructional strategies are as per global standards ",
          " Prepare instructional design checklists and guidelines",
          "Check for quality assurance"
        ],
        requirements:[
          " Experience in creating instructional plans and course maps.",
          " Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction",
          " Awareness of different instructional design models and familiarity with instructional and learning theories",
          " Awareness of latest trends in e-learning and instructional design",
          " Strong client consulting/interfacing skills.",
          " Ability to guide clients to focus on specific objectives and teaching points",
          " Strong meeting facilitation, presentation and interpersonal skills",
          " A thorough understanding of the web as an instructional medium",
          " Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"
      ]
      },
      {
        id:1,
        title:"Software Engineer",
        img:"../../assets/Software Quality Engineer.svg",
        package:"Rs. 5,00,000 lpa",
        description:[
          "Generate highly interactive and innovative instructional strategies for e-learning solutions",
          " Develop course structure and learning specifications addressing the requirements of the target audience ",
          " Address usability issues",
          " Keep abreast of new trends in e-learning",
          " Ensure that the instructional strategies are as per global standards ",
          " Prepare instructional design checklists and guidelines",
          "Check for quality assurance"
        ],
        requirements:[
          " Experience in creating instructional plans and course maps.",
          " Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction",
          " Awareness of different instructional design models and familiarity with instructional and learning theories",
          " Awareness of latest trends in e-learning and instructional design",
          " Strong client consulting/interfacing skills.",
          " Ability to guide clients to focus on specific objectives and teaching points",
          " Strong meeting facilitation, presentation and interpersonal skills",
          " A thorough understanding of the web as an instructional medium",
          " Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"
      ]
      },
      {
        id:2,
        title:"Software Quality Engineer",
        img:"../../assets/Software Quality Engineer.svg",
        package:"Rs. 5,00,000 lpa",
        description:[
          "Generate highly interactive and innovative instructional strategies for e-learning solutions",
          " Develop course structure and learning specifications addressing the requirements of the target audience ",
          " Address usability issues",
          " Keep abreast of new trends in e-learning",
          " Ensure that the instructional strategies are as per global standards ",
          " Prepare instructional design checklists and guidelines",
          "Check for quality assurance"
        ],
        requirements:[
          " Experience in creating instructional plans and course maps.",
          " Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction",
          " Awareness of different instructional design models and familiarity with instructional and learning theories",
          " Awareness of latest trends in e-learning and instructional design",
          " Strong client consulting/interfacing skills.",
          " Ability to guide clients to focus on specific objectives and teaching points",
          " Strong meeting facilitation, presentation and interpersonal skills",
          " A thorough understanding of the web as an instructional medium",
          " Post graduate degree in Education, Instructional Design, Mass Communication or Journalism"
      ]
      }
    ]
    this.walkinJobs=[
      {
        id:0,
        title:"Walk In for Designer Job Role",
        date:"10-Jul-2021 to 11-Jul-2021",
        city:"Mumbai",
        extraInfo:null,
        expiresIn:5,

        location:{
          venue:"Zeus Systems Pvt. Ltd.",
          address:" 1402, 14th Floor, Tower B, Peninsula Business Park. Ganpatrao Kadam Marg Lower Parel (W)",
          pincode:"400 013",
          phone:"+91-22-66600000"
        },
        roles:[this.roles[0]],
        timeslots:[
          {
            id:0,
            time:"9:00 AM to 11:00 AM"
          },
          {
            id:1,
            time:"1:00 PM to 3:00 PM"
          }
        ],
        genIns:[" We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates."," Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test."],
        examIns:[" Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes.",
          " Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.",
          "The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void.",
          " Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.",
          " Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam."," Candidates cannot use an iOS system/device for this exam."],
        sysReq:[
          " Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).",
          " The latest version of Google Chrome Browser only.",
          " Please note that Internet speed should be minimum 1 Mbps.",
          " Do not use a MacBook or iPad for the proctored exam."
        ],
        process:["- Every round is an elimination round. Candidates need to clear all rounds to get selected."," Round I : 4th August, 2018","Aptitude Test : 25 Questions","Round II (Interview) : 4th August, 2018."]
      },
      {
        id:1,
        title:"Walk In for Multiple Job Roles",
        date:"03-Jul-2021 to 04-Jul-2021",
        city:"Mumbai",
        extraInfo:"Internship Opportunity for MCA Students",
        expiresIn:null,
        
        location:{
          venue:"Zeus Systems Pvt. Ltd.",
          address:" 1402, 14th Floor, Tower B, Peninsula Business Park. Ganpatrao Kadam Marg Lower Parel (W)",
          pincode:"400 013",
          phone:"+91-22-66600000"
        },
        roles:[this.roles[0],this.roles[1],this.roles[2]],
        timeslots:[
          {
            id:0,
            time:"9:00 AM to 11:00 AM"
          },
          {
            id:1,
            time:"1:00 PM to 3:00 PM"
          }
        ],
        genIns:[" We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates."," Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test."],
        examIns:[" Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes.",
          " Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.",
          "The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void.",
          " Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.",
          " Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam."," Candidates cannot use an iOS system/device for this exam."],
        sysReq:[
          " Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).",
          " The latest version of Google Chrome Browser only.",
          " Please note that Internet speed should be minimum 1 Mbps.",
          " Do not use a MacBook or iPad for the proctored exam."
        ],
        process:["- Every round is an elimination round. Candidates need to clear all rounds to get selected."," Round I : 4th August, 2018","Aptitude Test : 25 Questions","Round II (Interview) : 4th August, 2018."]
      },
      {
        id:2,
        title:"Walk In for Design and Development Job Role",
        date:"10-Jul-2021 to 11-Jul-2021",
        city:"Mumbai",
        expiresIn:null,
        extraInfo:null,
        location:{
          venue:"Zeus Systems Pvt. Ltd.",
          address:" 1402, 14th Floor, Tower B, Peninsula Business Park. Ganpatrao Kadam Marg Lower Parel (W)",
          pincode:"400 013",
          phone:"+91-22-66600000"
        },
        roles:[this.roles[0],this.roles[1]],
        timeslots:[
          {
            id:0,
            time:"9:00 AM to 11:00 AM"
          },
          {
            id:1,
            time:"1:00 PM to 3:00 PM"
          }
        ],
        genIns:[" We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates."," Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test."],
        examIns:[" Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes.",
          " Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.",
          "The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void.",
          " Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.",
          " Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam."," Candidates cannot use an iOS system/device for this exam."],
        sysReq:[
          " Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).",
          " The latest version of Google Chrome Browser only.",
          " Please note that Internet speed should be minimum 1 Mbps.",
          " Do not use a MacBook or iPad for the proctored exam."
        ],
        process:["- Every round is an elimination round. Candidates need to clear all rounds to get selected."," Round I : 4th August, 2018","Aptitude Test : 25 Questions","Round II (Interview) : 4th August, 2018."]
      },
    ]
   }
   getAllWalkinJobs(){
    return this.walkinJobs
   }
   getWalkinJobsById(id:number):Walkinjobs | undefined{
    return this.walkinJobs.find(t=>t.id==id)
   }
   getAllRoles(){
    return this.roles
   }
   getRoleById(id:number):Roles | undefined{
    return this.roles.find(t=>t.id==id)
   }
}
  