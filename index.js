const button = document.getElementById('button');
const fn = document.getElementById('Firstname');
const mn = document.getElementById('Middlename');
const ln = document.getElementById('Lastname');
const lm = document.getElementById('Landmark');
const City = document.getElementById('City');
const State = document.getElementById('State');
const Zip = document.getElementById('Zip');
const em = document.getElementById('Email_ID');
const mob = document.getElementById('Mobile_Number');
const obj = document.getElementById('objective');
const Skls = document.getElementById("Skill");
const cr = document.getElementById("course");
const bd = document.getElementById("brd");
const ce = document.getElementById("college");
const yp = document.getElementById("YOP");
const ge = document.getElementById("Grade");
const oskil = document.getElementById("Other_skill");
const norg = document.getElementById("orgname");
const Jdisc = document.getElementById("Jobdisc");
const Jrole = document.getElementById("Jobrole");
const soskil = document.getElementById("Soft_skill");
const dob = document.getElementById("Date_of_birth");
const gen = document.getElementById("Gender");
const maritals = document.getElementById("Marital_status");
const lknown = document.getElementById("Languages_Known");
const hob = document.getElementById("Hobbies");
const paddress = document.getElementById("Permanent_Address");


function showinfo(fn, md, ln, lm, City, State, Zip, em, mob, obj, Skls,cr,bd,ce,yp,ge,oskil,norg,Jdisc,Jrole,soskil,dob,gen,maritals,lknown,hob,paddress) {    
    document.write("Name : " + fn + " " + md + " " + ln);
    document.write("<br>" + " Address : " + lm + "   city : " + City + "   State : " + State + "   Zipcode : " + Zip);
    document.write("<br>" + " Email ID : " + em + "<Br>" + " Mobile Number : " + mob);
    document.write(" <hr> <hr> <h3>Career Objective</h3><br> " + obj);
    document.write(" <hr> <h3>Professional Skills </h3> <br>" + Skls);
    document.write(" <hr><h3>Educational Qulaification </h3><br>");
    document.write(cr + "           " + bd + "        " + ce + "          " + yp + "          " + ge);
    document.write(" <hr><h3> Other Skills</h3> <br> " + oskil);
    document.write(" <hr> <h3>Work Experiance </h3>" );
    document.write("<br> Organization name :  " + norg );
    document.write("<br> Job Discription  : "+ Jdisc );
    document.write( "<br> Job Role :  " + Jrole );
    document.write(" <hr> <h3>Soft Skills</h3> <br> " + soskil);
    document.write("<br> <hr> <h3>Personal Information</h3> ");
    document.write("<br> Date Of Birth : " + dob);
    document.write("<br> Gender : " + gen);
    document.write("<br> Marital Status : " + maritals);
    document.write("<br> Languages Known : " + lknown);
    document.write("<br> Hobbies : " + hob);
    document.write("<br> Permanent Address : " + paddress);
    document.write("<br> <br><h3>Declaration : </h3>");  
    document.write("&nbsp &nbsp &nbsp &nbsp I hereby declare that the infomation provided is true to the best of my Knowledge.");
    document.write("<br> "+ fn + " " + md + " " + ln);



    
/////////////////////////////////////////////////////

    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = [];


    var n = 1;
    var x = 0;


    function AddRow(){

        var AddRown = document.getElementById("show");
        var NewRow  = AddRown.insertRow(n);

        list1[x] = document.getElementById("course").value;
        list2[x] = document.getElementById("brd").value;
        list3[x] = document.getElementById("college").value;
        list4[x] = document.getElementById("YOP").value;
        list5[x] = document.getElementById("Grade").value;

        var cel1 = NewRow.insertCell(0);
        var cel2 = NewRow.insertCell(1);
        var cel3 = NewRow.insertCell(2);
        var cel4 = NewRow.insertCell(3);
        var cel5 = NewRow.insertCell(4);

        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];
        cel4.innerHTML = list4[x];
        cel5.innerHTML = list5[x];

        n++;
        x++;
    }
}
button.addEventListener('click', () => {
    showinfo(Firstname.value, Middlename.value, Lastname.value, Landmark.value, City.value, State.value, Zip.value, Email_ID.value, Mobile_Number.value, objective.value, Skls.value,course.value, brd.value, college.value, YOP.value, Grade.value, Other_skill.value,orgname.value,Jobdisc.value,Jobrole.value,Soft_skill.value,Date_of_birth.value,Gender.value,Marital_status.value,Languages_known.value,Hobbies.value,Permanent_Address.value);
    
    document.body.style.backgroundColor = "#7feadb";  
    //document.getElementById.style.fontSize = "22px";

})

