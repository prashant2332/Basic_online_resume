function addNewWEField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here");

    let weob=document.getElementById("we");
    let weAddButtonob=document.getElementById("weAddButton");
    weob.insertBefore(newnode,weAddButtonob);
}
function addNewAQField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here");

    let aqob=document.getElementById("aq");
    let aqAddButtonob=document.getElementById("aqAddButton");
    aqob.insertBefore(newnode,aqAddButtonob);
}

function generateCV(){
    let namefield=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=namefield;

   document.getElementById("nameT2").innerHTML=namefield;
   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
   document.getElementById("linkedT").innerHTML=document.getElementById("linkedinField").value;

   document.getElementById("obT").innerHTML=document.getElementsById("obField").value;

   let wes=document.getElementsByClassName("workfield");

   let str="";

   for(let e of wes){
    str=str+`<li>${e.value}</li>`;
   }

   document.getElementById("weT").innerHTML=str;

   let aqs=document.getElementsByClassName("academicfield");

   let str1="";
   for (let e  of aqs) {
    str1=str1+`<li> ${e.value}</li>`;
    
   }
   document.getElementById("aqT").innerHTML=str1;
//    imagesetting
let file=document.getElementById("img-field").files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
//set the image to template
reader.onloadend=function(){
  document.getElementById("img-template").src=reader.result;
};

   document.getElementById("cv-form").style.display='none';
   document.getElementById("cv-template").style.display='block';

 }
//print-cv
function print(){
    window.print();9
}