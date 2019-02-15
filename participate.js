
function checkornotParticipate()
{


  uname=localStorage.getItem("uname");
  if(uname != null)
  {
    let user =new User();
    let type=user.getusertype(uname);
    if(uname!=null)
    {
      if(type=="admin")
      {
         window.location.href="admin.html";
      }
    }
  }
  else
  {
      window.location.href="index.html";
  }
}
function loadcourseforuser()
{

    document.getElementById("coursescontainer").innerHTML="";
    let user=new User();
    uname=localStorage.getItem("uname");
    userid=user.getuserid(uname);
    
    let course=new Course();
    let coursedata=course.getCourse();
    let coursescontainer=document.getElementById("coursescontainer");
    for(let i in coursedata)
    {
        if(coursedata[i].userid.indexOf(userid) != -1)
        {

            let coursebox=document.createElement("Div");
            coursebox.setAttribute("class","col-lg-3 col-md-6 col-sm-6 col-xs-6");
            coursebox.setAttribute("style","padding:2px");

            let innercoursebox=document.createElement("Div");
            innercoursebox.setAttribute("class","innercoursebox");
            
            let title=document.createElement("H2");
            title.innerHTML=coursedata[i].title;
            title.setAttribute("style","height:150px;text-align:center;padding-top:50px;")
            let completebtn=document.createElement("Button");
            completebtn.setAttribute("class","btn btn-block btn-primary");
            completebtn.innerHTML="Complete";
            completebtn.setAttribute("onClick",`completecourse(${coursedata[i].id},${userid})`)
            innercoursebox.appendChild(title);
            innercoursebox.appendChild(completebtn);

            if(coursedata[i].completecourse.indexOf(userid)!=-1)
            {
              completebtn.setAttribute("disabled","true");
              
            }
            
            coursebox.appendChild(innercoursebox);
            coursescontainer.appendChild(coursebox);
               
        }
    }

} 
function completecourse(courseid,userid)
{
    let course=new Course();
    let coursedata=course.getCourse();
    
    for(let i in coursedata)
    {

      if(coursedata[i].id==courseid)
      {
          coursedata[i].completecourse.push(userid);
      }
    }
    localStorage.setItem("course",JSON.stringify(coursedata));
    loadcourseforuser();
}