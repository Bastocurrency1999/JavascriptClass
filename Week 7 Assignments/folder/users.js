let  allusers = JSON.parse(localStorage.getItem("users"));
if(allusers==null)
{
    allusers=[];
}


function findUserByUserName()
{
   isUserExist = allusers.find(chekUsername)
   if(isUserExist==undefined)
   {
       alert("Record not found")
   }
   else 
   {
   location.href = "dashboard.html"
   location.assign("dashboard.html")

      // alert("Congrats!" +  JSON.stringify(isUserExist))
   }

}

function chekUsername(object){
    return object.username == document.getElementById("userName").value
}


function AddNewUser()
        { 
            password = document.getElementById("upassword").value
            cpassword =  document.getElementById("cpassword").value
   
            if(password==cpassword ){

                // user object
            profilrPics =  document.getElementById("pics").value
            newUser = 
            { "fullName" : document.getElementById("fullName").value,
               "email" : document.getElementById("email").value,
               "phone" : document.getElementById("phone").value,
               "pics" : profilrPics.split("\\")[2],
               "username" : document.getElementById("uUserName").value,
               "password" :document.getElementById("upassword").value

             }

// ############## Explanation for profile picture split #############//
              // #alert("before split" +newUser.pics)
              // #c:\fakepath\1.jpeg
              // # alert(newUser.pics.split("\\")[2])

             // add new user to localstorage
                    
                    // update users array with the new user
                      allusers.push(newUser)
                      // add to local storage
                      localStorage.setItem("users",JSON.stringify(allusers))

          
            }else {
                alert("Password mismatch")
            }
         

        }
