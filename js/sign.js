var namee=document.getElementById('name')
var emaill=document.getElementById('email')
var pass=document.getElementById('pass')
var signup=document.getElementById('signup')
var m=document.getElementById('ham')
var mm=document.getElementById('hm')
var signin=document.getElementById('sign-in')
signin.addEventListener('click',function(){
  window.location.href='./index.html'
})
var add=[]
function nome(){
   var texxt=namee.value
        var regex=/^[A-Za-z0-9-_*/s]{1,}/
          if(regex.test(texxt)==true )
            { 
              
            return true;
          } 
          else{
          
            return false;
          }
      }
      function password(){
        var textl=pass.value
              var regex=/^[A-Za-z0-9-_*+/s]{1,}/
                if(regex.test(textl)==true )
                  {
                    
                  return true;
                } else{
                
                  return false;
                }
              
      }      
      function emailo(){
       var   texto=emaill.value
       var regex=/^[A-Za-z0-9-_*+/s]+@[A-Za-z0-9_]{1,}/
         
          if(regex.test(texto)==true )
            {
              
            return true;
          } else{
          
            return false;
          }
        
        }  
namee.addEventListener('input',nome)
pass.addEventListener('input',password)
emaill.addEventListener('input',emailo)
  
 
signup.addEventListener('click',function(){
  
  
    var reg={
      name:namee.value,
      pass:pass.value,
      email:emaill.value,
    };
   
      add.push(reg)
   
  
 
    for(var i=0;i<add.length;i++){

      if(nome()==true&&password()==true&&emailo()==true){
     

       m.classList.remove('d-none')
         mm.classList.add('d-none')  
         localStorage.setItem('addname',JSON.stringify(add[i].name))
         localStorage.setItem('addpass',JSON.stringify(add[i].pass))
         localStorage.setItem('addemail',JSON.stringify(add[i].email))
         
      }
   
       else{
       
         m.classList.add('d-none')  
          
       mm.classList.remove('d-none')
       }
     
    }
    
 }
 

  
)






































// var texxt;
// var textl;
// var texto;
// if(localStorage.getItem('useremail')!=null){
// add=JSON.parse(localStorage.getItem('useremail'))

// }
//  function nome(){
//   texxt=namee.value
//       var regex=/^[A-Za-z0-9]{1,}$/
//         if(regex.test(texxt)==true )
//           { 
            
//           return true;
//         } 
//         else{
        
//           return false;
//         }
      
 

// } function password(){
//    textl=pass.value
//       var regex=/^[A-Za-z0-9]{1,}$/
//         if(regex.test(textl)==true )
//           {
            
//           return true;
//         } else{
        
//           return false;
//         }
      
 

// }

// function emailo(){
//   texto=emaill.value
//   var regex=/^[A-Za-z0-9]{1,}$/
//   if(regex.test(texto)==true )
//     {
      
//     return true;
//   } else{
  
//     return false;
//   }

// }
 
// signup.addEventListener('click',function(){
 
// var str={
//  name:textl,
// pass:texxt,
// emaill:texto,

// };
// for(var i=0;i<add.length;i++){
//   add.push(str)

// if(nome()==true&&emailo()==true&&password()==true  ){
//   m.classList.remove('d-none')
 
 
 
// //   localStorage.setItem('username',texxt)
// //  localStorage.getItem('username') 
// //  localStorage.setItem('pass',textl)
// //  localStorage.getItem('pass')
// //   localStorage.setItem('emaill',texto)
// //  localStorage.getItem('emaill')
//  }
//  else{
//    mm.classList.remove('d-none')
//  }
// localStorage.setItem('username',texxt)
// localStorage.setItem('userpass',textl)
// localStorage.setItem('useremail',texto)
// console.log(localStorage.getItem('username'))
// }
// }
// )



