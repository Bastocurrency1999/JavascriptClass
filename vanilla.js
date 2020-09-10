// create a variable of Select info
var SelectInfo = parseInt(prompt("WELCOME TO BASTO-DEV SERVICE PROVIDER \n SELECT YOUR PREFERRED OPTIONS * \n\n 1. Airtime-Self \n 2.Airtime-Other\n 3.Data \n 4.Transfer"))

// test condition for Airtime Self
if(SelectInfo==1)
{
    var Pin = parseInt(prompt("Please Enter Your Pin"));
    var Amount = parseInt(prompt("Please Enter Your Amount"));
    // Test a condition for amount
      if(Amount <=100 )
      {
          prompt("Amount Must Range From (N100-N50000)\n Please Enter Your Amount");
      }else if(Amount > 50000)
      {
          prompt("Amount Must Range From (N100-N50000)\n Please Enter Your Amount");
      }else{
          var Confirm = confirm("Are you sure you wanna do this Transaction ?");
          if (Confirm==true)
          {
            alert("Your Line Is Credited Successfully with an amount of " + Amount + "");
            var Confirm2 = confirm("Wanna do another Transaction ?");
            if(Confirm2==true)
            {
                // if the user click Ok button it should take them back to Enter Amount
            }else{
                alert("Thanks for choosing Us");
            }

          }
      }
}


if(SelectInfo==2)
{
    var Pin = parseInt(prompt("Please Enter Your Pin"));
    var Recipient = parseInt(prompt("Please Enter Recipient Number"))
    var Amount = parseInt(prompt("Please Enter Your Amount"));
    if(Amount <=100 )
      {
          prompt("Amount Must Range From (N100-N50000)\n Please Enter Your Amount");
      }else if(Amount > 50000)
      {
          prompt("Amount Must Range From (N100-N50000)\n Please Enter Your Amount");
      }else{
          var Confirm = confirm("Are you sure you wanna do this Transaction ?");
          if (Confirm==true)
          {
            alert("An amount of " + Amount + " Is Successfully Sent to " + Recipient + "");
            var Confirm2 = confirm("Wanna do another Transaction ?");
            if(Confirm2==true)
            {
                // if the user click Ok button it should take them back to Enter Amount
            }else{
                alert("Thanks for choosing Us BASTO_DEV SERVICE PROVIDER");
            }
          }
      }
}


if(SelectInfo==3){
    var DataMenu =parseInt(prompt("1. Buy Data \n 2.Daily and Weekend \n 3. Weekly \n 4. Monthly"));
    if(DataMenu==1){}
    if(DataMenu==2){}
    if(DataMenu==3){}
    if(DataMenu==4){}
}