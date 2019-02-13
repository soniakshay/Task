let myjson;
let uname
function checkuser()
{


 uname=localStorage.getItem("uname");
 if(uname!=null)
 {

  let user =new User();
  let type=user.getusertype(uname);
  if(type=="admin")
  {
    window.location.href="admin.html";
  }
  if(type=="participate")
  {
    alert("participate")
  }


}

}
function loaddata()
{
  let data=[{
    "id":1,
    "name":"akshay",
    "uname":"akshay",
    "pwd":"123",
    "usertype":"admin"  
  },
  {
    "id":2,
    "name":"Ronak",
    "uname":"Ronak",
    "pwd":"123",
    "usertype":"participate"

  }];
  myjson=JSON.parse(localStorage.getItem("myjson"));
  if(myjson==null)
  {
    localStorage.setItem("myjson",JSON.stringify(data));
  }
}

function removeUser(index)
{
  let  ans=confirm("Are You Sure?");
  if(ans==true){
    let user=new User();
    data=user.removeuser(index);
    loaduserdata();  
  }
}


function loaduserdata()
{

  let user=new User();
  data=user.getUsers(); 
  tbody=document.getElementById("tablebody");
  tbody.innerHTML="";
  count=0;
  for(let i in data)
  {
    tr=document.createElement("TR");
    td1=document.createElement("TD");
    td1txt=document.createTextNode(data[i].id);
    td1.appendChild(td1txt);
    td2=document.createElement("TD");
    td2txt=document.createTextNode(data[i].name);
    td2.appendChild(td2txt);
    td3=document.createElement("TD");
    td3txt=document.createTextNode(data[i].uname);
    td3.appendChild(td3txt);
    td4=document.createElement("TD");
    td4txt=document.createTextNode(data[i].pwd);
    td4.appendChild(td4txt);
    td5=document.createElement("TD");
    deletebtn=document.createElement("SPAN");
    deletebtn.setAttribute("class", "glyphicon glyphicon-trash");
    deletebtn.setAttribute("style", "color:red");
    deletebtn.setAttribute("onClick", `removeUser(${count})`);
    
    td5.appendChild(deletebtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    count++;
  }


}



function loadcoursedata()
{

  let course=new Course();
  data=course.getCourse()
  tbody=document.getElementById("coursetablebody");
  tbody.innerHTML="";
  count=0;
  for(let i in data)
  {
    tr=document.createElement("TR");
    td1=document.createElement("TD");
    td1txt=document.createTextNode(data[i].id);
    td1.appendChild(td1txt);
    td2=document.createElement("TD");
    td2txt=document.createTextNode(data[i].title);
    td2.appendChild(td2txt);
    td3=document.createElement("TD");
    td3txt=document.createTextNode(data[i].discription);
    td3.appendChild(td3txt);
    
    td5=document.createElement("TD");
    deletebtn=document.createElement("SPAN");
    deletebtn.setAttribute("class", "glyphicon glyphicon-trash");
    deletebtn.setAttribute("style", "color:red");
    deletebtn.setAttribute("onClick", `removeCourse(${count})`);
    
    td5.appendChild(deletebtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    tr.appendChild(td5);
    tbody.appendChild(tr);
    count++;
  }


}



function  Addcourse()
{ 
  title=document.getElementById("coursetitle").value;
  discription=document.getElementById("coursediscription").value;
  let course=new Course();
  course.Addcourse(title,discription);
  document.getElementById("coursetitle").value="";
  document.getElementById("coursediscription").value="";
}
function removeCourse(index)
{
  let  ans=confirm("Are You Sure?");
  if(ans==true){
    let course =new Course();
    data=course.RemoveCourse(index);
    loadcoursedata();  
  }
}