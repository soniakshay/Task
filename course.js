class Course
{

	constructor()
	{
		let course=localStorage.getItem("course");
		if(course==null)
		{
			course=[];
			localStorage.setItem("course",JSON.stringify(course));
      
		}
	}
 getCourse()
 {
   let data=JSON.parse(localStorage.getItem("course"));
   return data;
 }
 Addcourse(title,discription)
 {
  let obj={};
  let course=JSON.parse(localStorage.getItem("course"));
  let maxid=_.maxBy(course, function(o) { return o.id; });
  if(maxid==undefined)
  {
   obj["id"]=1;
   obj["title"]=title
   obj["discription"]=discription;
   obj["userid"]=[];
 }
 else
 {
   obj["id"]=(maxid.id) + 1;
   obj["title"]=title
   obj["discription"]=discription;
   obj["userid"]=[];
 }
 course.push(obj);
 localStorage.setItem("course",JSON.stringify(course));
 

}  
RemoveCourse(index)
{
  let data=JSON.parse(localStorage.getItem("course"));
  data.splice(index,1);
  localStorage.setItem("course",JSON.stringify(data));
}

}