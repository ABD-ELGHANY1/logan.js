var EmailInput=document.getElementById("email")
var password=document.getElementById('pass')
var logan=document.getElementById("sub")
var signUp=document.getElementById('sign-up')
var moon=document.getElementById("error")
var mon=document.getElementById("erroro")
var addemail=[];
 var addpass=[];
addpass=JSON.parse(localStorage.getItem("addpass"))
addemail=JSON.parse(localStorage.getItem("addemail"))

logan.addEventListener('click',function(){
    if(validemail()==true&&validpass()==true)
        {
  mon.classList.replace('d-flex','d-none')
  window.location.href='./page.html'
            
        }
        else{

   mon.classList.replace('d-none','d-flex')

            
        }
})
function validpass(){
  var text=password.value;

if( addpass.includes(text) ){

moon.classList.replace('d-flex','d-none')
  return true;
}


  else{
    moon.classList.replace('d-none','d-flex')

   return false;
  }



}
function validemail(){
  var text=EmailInput.value;

  var regex=/^[A-Za-z0-9-_*+/s]+@[A-Za-z0-9_]{1,}/
if(regex.test(text)==true){

    
  if(addemail.includes(text)){

return true; 
}
}
    

  
   else{
   
   return false;
  }
}

signUp.addEventListener('click',function(){

  window.location.href="./signup.html"
} )