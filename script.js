var pass = document.getElementById("password")
var message = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', ()=>{
  if(pass.value.length>0){
    message.style.display ="block";
  }else{
    message.style.display ="none";
  }

  if(pass.value.length<4){
    str.innerHTML = "weak.";
    str.style.color="#ff5925"
    pass.style.borderColor="#ff5925"

  }else if(pass.value.length>4 && pass.value.length < 8 ){
    str.innerHTML="medium."
    str.style.color="yellow"
    pass.style.borderColor="yellow"

  }else if(pass.value.length>8){
   str.innerHTML="strong."
   str.style.color="#26d730"
  pass.style.borderColor="#26d730"
  }
})