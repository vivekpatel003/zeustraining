  
let logoImg = document.getElementById("logo-img");
let ulList = document.getElementById("nav-list-id");
let firstTabImg = document.getElementById("first-tab-img") 
let secondTabImg = document.getElementById("second-tab-img") 
let ClassId = document.getElementById("Class-id")
let CourseId = document.getElementById("Course-id")
let sortSelectId = document.getElementById("Courses")
let thirdText = document.getElementById("third-txt-id")
let thirdImg = document.getElementById("third-img-id")
let oneImg = document.getElementById("one-img-id")
let twoImg = document.getElementById("two-img-id")
let threeImg = document.getElementById("three-img-id")
let fourImg = document.getElementById("four-img-id")
let oneHead = document.getElementById("one-head-id")
let twoHead = document.getElementById("two-head-id")
let threeHead = document.getElementById("three-head-id")
let fourHead = document.getElementById("four-head-id")
let oneGradeId = document.getElementById("one-grade-id")
let twoGradeId = document.getElementById("two-grade-id")
let threeGradeId = document.getElementById("three-grade-id")
let fourGradeId = document.getElementById("four-grade-id")
let oneSubId = document.getElementById("one-subject-id")
let twoSubId = document.getElementById("two-subject-id")
let threeSubId = document.getElementById("three-subject-id")
let fourSubId = document.getElementById("four-subject-id")
let oneIconId = document.getElementById("one-icons-id")
let twoIconId = document.getElementById("two-icons-id")
let threeIconId = document.getElementById("three-icons-id")
let fourIconId = document.getElementById("four-icons-id")
let oneFootId = document.getElementById("one-foot-id")
let threeFootId = document.getElementById("three-foot-id")
let fourFootId = document.getElementById("four-foot-id")
let oneTeachersId = document.getElementById("one-Teacher")
let twoTeachersId = document.getElementById("two-Teacher")
let threeTeachersId = document.getElementById("three-Teacher")
let fourTeachersId = document.getElementById("four-Teacher")
let hampMenuId = document.getElementById("hamp-menu-id")
let alertID = document.getElementById("alerts-menu-id")
let announceId = document.getElementById("announces-menu-id")
let badge1Id = document.getElementById("badge1-id")
let badge2Id = document.getElementById("badge2-id")
let badge3Id = document.getElementById("badge3-id")
let alertImggId = document.getElementById("alerts-id")
let announcementImgId = document.getElementById("announcements-id")
let profileImgId = document.getElementById("ProfilePicture-id")
let hampImgId = document.getElementById("hampburger-id")
let upperFooterId = document.getElementById("upper-footer-id")
let lowerFooterId = document.getElementById("lower-footer-id")

let dashBoard = {
    dropIcon:`<i class="fa-solid fa-caret-down"></i>`,
    logoImgLink:"images/logo used in header.svg",
    navList: ["dashBoard","content","Users","Reports","Admin"],
    badgeList:[badge1Id,badge2Id,badge3Id],
    buttonContent:[1,2,'T'],
    iconList:[alertImggId,announcementImgId,profileImgId,hampImgId],
    logoIcons:["images/alerts.svg","images/announcements.svg","images/account_circle.svg","images/hamburger-menu.svg"],
    alertClass:["al-1","al-2","al-1","al-1","al-1","al-2"],
    iconStatusImg:["images/dnd.png","images/correct.png"],
    courseAltNot:["","Course: Advanced Mathematics","","<b>Class:</b> Basics of Algebra","","Course: Advanced Mathematics"],
    dateAltNot:["15-Sep-2018 at 07:21 pm","15-Sep-2018 at 05:21 pm","13-Sep-2018 at 01:15 pm","15-Sep-2018 at 07:21 pm","15-Sep-2018 at 07:21 pm","15-Sep-2018 at 07:21 pm"],
    alertMenu:["License for Introduction to Algebra has been assigned to your school","Lesson 3 Practice Worksheet overdue for Amy Santiago",
                "23 new students created","15 submissions ready for evaluation","License for Basic Concepts in Geometry has been assigned to your... school",
                "License for Basic Concepts in Geometry has been assigned to your... school"],

    announceClass:["an-2","an-1","an-2","an-1","an-1"],
    proffName:["PA: Wilson Kumar","PA: Samson White","PA: Wilson Kumar","PA: Wilson Kumar","PA: Wilson Kumar","",""],
    courseAncNot:["2 files are attached","2 files are attached","Course: Mathematics 101","","Course: Mathematics 101"],
    dateAncNot:["15-Sep-2018 at 07:21 pm","15-Sep-2018 at 07:21 pm","15-Sep-2018 at 07:21 pm","15-Sep-2018 at 07:21 pm","15-Sep-2018 at 07:21 pm"],
    announceMenu:["No classes will be held on 21st Nov","Guest lecture on Geometry on 20th September","Additional course materials available on request","No classes will be held on 25th Dec","Additional course materials available on request",""],
    secondTab:{
        course:{
                logo:"images/courses.svg",
                data:`<b>4</b> Courses`
                },
        class:{
                logo:"images/classes.svg",
                data:`<b>4</b>Clasees`
              }
    },
    thirdTab:{
        data:"Showing 4 of 4 courses",
        sort:["Course Name","Date of join","Size of Course"],
        imgAdd:"images/sort.svg"
    },
    forthTab:{
        imgId:[oneImg,twoImg,threeImg,fourImg],
        headId:[oneHead,twoHead,threeHead,fourHead],
        gradeId:[oneGradeId,twoGradeId,threeGradeId,fourGradeId],
        subId:[oneSubId,twoSubId,threeSubId,fourSubId],
        iconId:[oneIconId,twoIconId,threeIconId,fourIconId],
        footId:[oneFootId,threeFootId,fourFootId],
        teacherId:[oneTeachersId,twoTeachersId,threeTeachersId,fourTeachersId],
        foots:[["50 Students","21-Jan-2020 - 21-Aug-2020"],["300 Students"],["44 Students","14-Oct-2019 - 20-Oct-2020"]],
        icons:["images/preview.svg","images/manage course.svg","images/grade submissions.svg","images/reports.svg"],
        iconAlts:["prev","manage","submission","report"],
        cardImg:["images/imageMask-1.svg","images/imageMask-2.svg","images/imageMask.svg","images/imageMask-3.svg"],
        headingName:["Acceleration","Displacement, Velocity and Speed","Introduction to Biology: Micro organisms and how they affec...","Introduction to High School Mathematics"],
        favLogo:"images/favourite.svg",
        subject:[["Physics","Grade 7<span>+2</span>"],
                 ["Physics 2","Grade 6<span>+3</span>"],
                 ["Biology","Grade 4<span>+1</span>"],
                 ["Mathematics","Grade 8<span>+3</span>"]],
        courseLan:[["<strong>4</strong>Units","<strong>24</strong>Topics","<strong>18</strong>Lessons"],
                ["<strong>2</strong>Units","<strong>15</strong>Lessons","<strong>20</strong>Topics"],
                ["<strong>5</strong>Units","<strong>16</strong>Lessons","<strong>22</strong>Topics"],
                ["<strong>2</strong>Units","<strong>15</strong>Lessons","<strong>20</strong>Topics"]],
        teachers:["All Classes","No Classes","Mr. Frank's Class B","Mr. Frank's Class A"],
        icons:["images/preview.svg","images/manage course.svg","images/grade submissions.svg","images/reports.svg"]
    },
    footerTab:{
        upperFooter:["About","Contact Us"],
        lowerFooter:["Copyright © 2020-2021","Zeus Systems Pvt. Ltd.","All rights reserved."],
        logoImg:"images/logousedinfooter.svg"
    }
};

document.addEventListener("DOMContentLoaded",renderNew())

function renderNew()
{
    logoImg.src = dashBoard.logoImgLink;
    navList();
    secondTab();
    thirdTab();
    cards();
   footerTab();
}
function navList()
{
    let headNav = dashBoard.navList;
    let str=''
    for(let i=0;i<headNav.length;i++)
    {
        
            str += `<a href="#${headNav[i]}"><li>
                        ${headNav[i]}            
                    </li><a>`;    
    }
    ulList.innerHTML = str;
    let arr1 = dashBoard.badgeList;
    let arr2 = dashBoard.buttonContent;
    for(let i=0;i<arr1.length;i++)
    {
        arr1[i].textContent = arr2[i] 
    }
    arr1 = dashBoard.iconList;
    arr2 = dashBoard.logoIcons;
    for(let i=0;i<arr1.length;i++)
    {
        
             arr1[i].src = arr2[i];    
    }
    arr1 = dashBoard.navList;
    str=''
    for(let i=0;i<arr1.length;i++)
    {
        str += `<a href="#${arr1[i]}">
                    <p>${arr1[i]}</p> 
                    <button>${dashBoard.dropIcon}</button>
                </a>`
    }
    hampMenuId.innerHTML = str;



    str=''
    arr1 = dashBoard.alertClass;
   for(let i=0;i<arr1.length;i++)
   {
    if(arr1[i]==="al-1"){
      str+= `<div class="${arr1[i]}">
       <div class="up">
       <p>${dashBoard.alertMenu[i]}
       </p>
       <a href=""><img src="${dashBoard.iconStatusImg[0]}" alt="left" /></a>
       </div>
       <div class="mid">${dashBoard.courseAltNot[i]}</div>
       <div class="lw">${dashBoard.dateAltNot[i]}</div>
       </div>`
    }
    else{
        str+= `<div class="${arr1[i]}">
       <div class="up">
       <p>${dashBoard.alertMenu[i]}
       </p>
       <a href=""><img src="${dashBoard.iconStatusImg[1]}" alt="seen" /></a>
       </div>
       <div class="mid">${dashBoard.courseAltNot[i]}</div>
       <div class="lw">${dashBoard.dateAltNot[i]}</div>
       </div>`
        }
    }
    alertID.innerHTML = str+`<div class="btns-alt">
    <button class="show-all">SHOW ALL</button>
  </div>`;



  str=''
  arr1 = dashBoard.announceClass;
 for(let i=0;i<arr1.length;i++)
 {
    if(arr1[i]==="an-1"){
    str += `<div class="${arr1[i]}">
              <div class="up-an">
                <p>${dashBoard.proffName[i]}</p>
                <a href=""><img src="${dashBoard.iconStatusImg[0]}" alt="left" /></a>
              </div>
              <div class="mid-an">
                <p>${dashBoard.announceMenu[i]}</p>
              </div>
              <div class="lw-an">
                <p>${dashBoard.courseAncNot[i]}</p>
                <p>${dashBoard.dateAncNot[i]}</p>
              </div>
            </div>`
    }
    else{
        str += `<div class="${arr1[i]}">
              <div class="up-an">
                <p>${dashBoard.proffName[i]}</p>
                <a href=""><img src="${dashBoard.iconStatusImg[1]}" alt="left" /></a>
              </div>
              <div class="mid-an">
                <p>${dashBoard.announceMenu[i]}</p>
              </div>
              <div class="lw-an">
                <p>${dashBoard.courseAncNot[i]}</p>
                <p>${dashBoard.dateAncNot[i]}</p>
              </div>
            </div>`
    }
 }
 announceId.innerHTML = str+`<div class="btns-ans">
              <button class="show-all" id="show-all-btn" onclick="showAns()">
                SHOW ALL</button
              ><button class="create-new">CREATE NEW</button>
            </div>`


}
function footerTab()
{
    let arr1 = dashBoard.footerTab.upperFooter;
    str=''
    for(let i=0;i<arr1.length;i++)
    {
        str+=`<p class="${arr1[i]}">${arr1[i]}</p>`
    }
    upperFooterId.innerHTML = str;

    arr1 = dashBoard.footerTab.lowerFooter;
    str=`<img
    class="footer-logo"
    src="${dashBoard.footerTab.logoImg}"
    alt="footer-logo-img"
  />`
    for(let i=0;i<arr1.length;i++)
    {
        str+=`<p class="${arr1[i]}">${arr1[i]}</p>`
    }
    lowerFooterId.innerHTML = str;

}
function secondTab()
{
    firstTabImg.src = dashBoard.secondTab.course.logo;
    secondTabImg.src = dashBoard.secondTab.class.logo;
    document.getElementById("course-txt-id").innerHTML = dashBoard.secondTab.course.data;
    document.getElementById("class-txt-id").innerHTML = dashBoard.secondTab.class.data;
}

function thirdTab()
{
    thirdText.textContent = dashBoard.thirdTab.data

    let optionStr = "";
    let n = dashBoard.thirdTab.sort.length;
    let arr = dashBoard.thirdTab.sort;
    for (let i = 0; i < n; i++) {
    optionStr += `<option value="${arr[i]}">
        ${arr[i]}
            </option>`;
    }
    sortSelectId.innerHTML = optionStr;

    thirdImg.src = dashBoard.thirdTab.imgAdd 
}


function cards()
{
        let arr1 = dashBoard.forthTab.imgId;
        let n = arr1.length;
        let arr2 = dashBoard.forthTab.cardImg;
        let arr3 = dashBoard.forthTab.headId;
        let arr4 = dashBoard.forthTab.headingName;
        for(let i=0;i<n;i++)
        {
            arr1[i].src = arr2[i]
            arr3[i].innerHTML = arr4[i];
        }
        let m = dashBoard.forthTab.courseLan[0].length;
        arr1 = dashBoard.forthTab.courseLan;
        arr2 = dashBoard.forthTab.gradeId;
        arr3 = dashBoard.forthTab.subId;
        arr4 = dashBoard.forthTab.subject;
        let arr5 =dashBoard.forthTab.icons;
        let arr6 =dashBoard.forthTab.iconAlts;
        let arr7 = dashBoard.forthTab.iconId;
        for(let i=0;i<n;i++)
        {
            let str=''
            for(let j=0;j<m;j++)
            {
                str += `<p>
                ${arr1[i][j]}
                </p>`
            }
            arr2[i].innerHTML = str;
            let p = arr4[i].length;
            let strs=''
            for(let k=0;k<p;k++)
            {
                if(k%2==0){
                    strs += `<p class="sb">
                            ${arr4[i][k]}
                    </p>`
                }else{
                    strs += `<p class="Grd">
                            ${arr4[i][k]}
                    </p>`
                }
            }
            
            let strp=''
            for(let l=0;l<n;l++)
            {
                if((i==1 || i== 2) && (l==1 || l==2))
                    strp += `<img  class="dull" src="${arr5[l]}" alt="${arr6[l]}">`
                else    
                strp += `<img  src="${arr5[l]}" alt="${arr6[l]}">`
            }
            // console.log(arr7[i])
            
            arr7[i].innerHTML = strp;
            arr3[i].innerHTML = strs;

            let arr10 = dashBoard.forthTab.teachers;
            let arr11 = dashBoard.forthTab.teacherId;
            str=''
            for(let p=0;p<arr10.length;p++)
            {
                if(i==1 && p==1)
                {
                    str += `<option disabled selected value="${arr10[p]}">${arr10[p]}</option>`
                }
               else if((i==0 && p==2) || (i==1 && p==1) || (i==2 && p==0) || (i==2 && p==0) || (i==3 && p==3)){
                    str += `<option selected value="${arr10[p]}">${arr10[p]}</option>`
                }
                else{
                    str += `<option value="${arr10[p]}">${arr10[p]}</option>`
                }
                
            }
            arr11[i].innerHTML = str;
        }
        
        let arr8 = dashBoard.forthTab.footId;
        let arr9 = dashBoard.forthTab.foots;
        for(let i=0;i<arr8.length;i++)
        {
            let str=''
            for(let j=0;j<arr9[i].length;j++)
            {
                if(j%2==0 && i!=1){
                    str += `<p class="sb">
                            ${arr9[i][j]}
                    </p>`
                }else{
                    str += `<p>
                            ${arr9[i][j]}
                    </p>`
                }
            }
            arr8[i].innerHTML = str;
        }
        

       
        // firstCard();
        // secondCard();
        // thirdCard();
        // fourthCard();   
}

function menuList()
{
     
    if(hampMenuId.style.display==="none")
    {
        hampMenuId.style.display="flex";
    }
    else{
        hampMenuId.style.display="none";
    }
}
function closeHamp()
{
    hampMenuId.style.display="none";
}
function alertFunc()
{
    if(alertID.style.display === "none")
    {
        alertID.style.display = "flex";
        document.getElementById("badge1-id").style.visibility ="hidden";
    }
    else{
        alertID.style.display = "none";
        
    }
    // console.log(window.getComputedStyle(document.querySelector('#badge1-id')).visibility)
}

function announcementFunc(){
    
    if(announceId.style.display === "none")
    {
        announceId.style.display = "flex";
        document.getElementById("badge2-id").style.visibility ="hidden";
    }
    else{
        announceId.style.display = "none"; 
    }
}

function showAns()
{
    console.log("inside")
    if(announceId.style.overflow === "auto")
    {
        announceId.style.overflow = "visible";
        // document.getElementById("show-all-btn").innerHTML ="HIDE LIST";
    }
    else{
        announceId.style.display = "auto"; 
    }
}

function closeAnn()
{
    announceId.style.display="none";
}
function closeAlt()
{
    alertID.style.display="none";
}