 class User{

        constructor()
        {
        }

        getuser(uname,pwd){
            loaddata();
            for(let  i in myjson)
            {
             
               if(myjson[i].uname==uname && myjson[i].pwd==pwd)
               {
                  localStorage.setItem("uname",myjson[i].uname);
                 if(myjson[i].usertype=="admin")
                  {
                    window.location.href="admin.html";
                  }
                  if(myjson[i].usertype=="participate")
                  {
                    window.location.href="participate.html";
                  }
                  

               }

            }

        }
        getusertype(uname)
        {
          for(let i in myjson)
          {
            if(myjson[i].uname==uname)
            {
                return myjson[i].usertype;

            }

          }
        }

        Adduser(name,uname,pwd,usertype)
        {
          let obj={};
          let data=JSON.parse(localStorage.getItem("myjson"));
          let maxid=_.maxBy(data, function(o) { return o.id; });
          obj["id"]=(maxid.id) + 1;
          obj["name"]=name;
          obj["uname"]=uname;
          obj["pwd"]=pwd;
          obj["usertype"]=usertype;
          data.push(obj);
          localStorage.setItem("myjson",JSON.stringify(data));



        }
        getUsers()
        {
           let data=JSON.parse(localStorage.getItem("myjson"));
           return data;
        }
        removeuser(index)
        {
            let data=JSON.parse(localStorage.getItem("myjson"));
            data.splice(index,1);
            localStorage.setItem("myjson",JSON.stringify(data));
        }


}

