// login variables
let stateId = document.getElementById("stat");
let distId = document.getElementById("Dist");
let logoId = document.getElementById("logo-img");
let headId = document.getElementById("head-form");

//DashBoard-Page Variabels


let login = {
  states: ["Texas", "Florida", "Alaska", "Virginia"],
  districts:["Alabama School District","Andrews County","Angelina County","Aransas County"],
  logoImgLink:"images/logo used in header.svg"
};


stateId.addEventListener("click",statesShow())
distId.addEventListener("click",DistrictShow())
document.addEventListener("DOMContentLoaded",renderNew())

function renderNew()
{
    logoId.src = login.logoImgLink;
    headId.textContent = "Log in with Quantum";
}

function statesShow() {
  let optionStr = "";
  let n = login.states.length;
  for (let i = 0; i < n; i++) {
    optionStr += `<option value="${login.states[i]}">
  ${login.states[i]}
      </option>`;
  }
  stateId.innerHTML = optionStr;
}

function DistrictShow() {
    let optionStr = "";
    let n = login.districts.length;
    for (let i = 0; i < n; i++) {
      optionStr += `<option value="${login.districts[i]}">
    ${login.districts[i]}
        </option>`;
    }
    distId.innerHTML = optionStr;
  }
