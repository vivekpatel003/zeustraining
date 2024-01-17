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

let dashBoard = {
    logoImgLink:"images/logo used in header.svg",
    navList: ["dashBoard","content","Users","Reports","Admin"],
    alertMenu:["License for Introduction to Algebra has been assigned to your school","Lesson 3 Practice Worksheet overdue for Amy Santiago",
                "23 new students created","15 submissions ready for evaluation","License for Basic Concepts in Geometry has been assigned to your... school",
                "License for Basic Concepts in Geometry has been assigned to your... school"],
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