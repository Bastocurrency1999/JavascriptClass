let  UsersAccount = JSON.parse(localStorage.getItem("users"));
if(UsersAccount==null)
{
    UsersAccount=[];
}

function ConfirmUser()
{
   isUserExist = UsersAccount.find(chekUsername)
   if(isUserExist==undefined)
   {
       alert("Record not found")
   }
   else 
   {
   location.assign("dashboard.html")

      alert("Congrats!" +  JSON.stringify(isUserExist))
   }

}

function chekUsername(object){
    return object.username == document.getElementById("userName").value
}

function PromptContinuousUserprofile()
{
    do {
        alert("Users information must be included");
    }
    while(AddNewUser()==false)
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
                    UsersAccount.push(newUser)
                      // add to local storage
                      localStorage.setItem("users",JSON.stringify(UsersAccount))
                    alert("Your Account Registration is Successfull \n Kindly proceed to login page")
                      location.assign("login.html")
            }else {
                alert("Password mismatch")
            }

            PromptContinuousUserprofile()
        
        }