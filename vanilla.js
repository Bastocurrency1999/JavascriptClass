///////////////////////////////////////////////////////////////////////////////////////
 // ########################### My First Assignment ##################################
//////////////////////////////////////////////////////////////////////////////////////

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
    var DataMenu =parseInt(prompt("1. Buy Data \n 2. Check data \n 3. Data Transfer"));
    // Test condition for Buy Data starts  //
    if(DataMenu==1){
      var DataL =parseInt(prompt("1. Daily and Weekend \n 2. Weekly \n 3. Monthly"));
    // Test condition for Daily and Weekend starts //
    if(DataL==1){
       var DailyDT =parseInt(prompt("1. Daily 25MB \n 2. Daily 100MB \n 3. Daily 650MB \n 4. Nights and Weekend"));
       // Test codition for Daily 25MB  starts //
       if(DailyDT==1){}
       // Test codition for Daily 25MB  Ends //

      // Test codition for Daily 100MB  starts //
       if(DailyDT==2){}
      // Test codition for Daily 100MB  Ends //

      // Test codition for Daily 650MB  starts //
       if(DailyDT==3){}
      // Test codition for Daily 650MB  Ends //

      // Test codition for  Night and Weekend  starts //
       if(DailyDT==4){}
      // Test codition for  Night and Weekend  Ends //
    }
    // Test condition for Daily and Weekend Ends //

      // Test condition for Daily and weekend starts  //
      if (DataL==1){}
      // Test condition for Daily and weekend Ends //

      // Test condition for Weekly starts  //
      if (DataL==2){}
      // Test condition for Weekly Ends  //

      // Test condition for Monthly starts  //
      if (DataL==3){}
      // Test condition for Monthly Ends  //
    }
    // Test condition for Buy Data Ends  //

    // Test condition for Check Data starts  //
    if(DataMenu==2){}
    // Test condition for Check Data Ends  //

   // Test condition for Data Transfer Starts  //
    if(DataMenu==3){
      var Pin = parseInt(prompt("Please Enter Your Pin"));
      var RecipientNo = parseInt(prompt("Please Enter Your Recipient Number"));
      var DataAmount = parseInt(prompt("Please Enter Megabyte Amount You wanna Send"))
       /* i will work on this data Amount and apply condition that the Mb should range
        between 1MB to 1000MB */
        if(DataAmount > 100){
          var ConfirmMb = confirm("Are you sure you wanna send an Amount of " + DataAmount + "MB to " + RecipientNo + "");
          if(ConfirmMb==true){
            alert("An amount of " + DataAmount + " Is Successfully Sent to " + RecipientNo + "")
            var ConfirmN = confirm("Wanna do Another transaction ? ")
            if(ConfirmN==true){
              // i want it to go back to Please Enter your pin
            }else{
              alert("Thanks for Choosing BASTO-DEV NETWORK PROVIDER")
            }
          }else{
            // i want it to go back to Enter Megabyte Amount you wanna send
          }
        }
    }
  // Test condition for Data Transfer Ends  //
}



if (SelectInfo==4){

}


////////////////////////////////////////////////////////////////////////////////////////////////////
 // ############################# Todays Excersice 3:09 ##########################################


 var FirstNumber = parseInt(prompt("Input your first number"));
do{
  FirstNumber = prompt("Please provide an input")
}
while(!FirstNumber)
var SecondNumber = parseInt(prompt("Input your second number"));
var PromptAlways = prompt("please provide an input");

var Check = parseInt(prompt("1.Addition\n2.Subtract\n3.Multiply\n4.Division"));
if(Check==1){
  var Add = alert(FirstNumber  + SecondNumber);
}
if(Check==2){
  var Subtract = alert(FirstNumber - SecondNumber);
}
if(Check==3){
  var Multiply = alert(FirstNumber * SecondNumber);
}
if(Check==4){
  var Division = alert(FirstNumber / SecondNumber);
}
////////////////////////////////////////////////////////////////////////////////////////////////////

