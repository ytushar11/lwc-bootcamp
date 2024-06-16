
let captchachecked = false;
function beforeSubmit(event){
   if(captchachecked){
      let outputdate = document.querySelector(".outputDate");
    let inputdate = document.querySelector(".inputDate");
   let formatteddate = new Date(inputdate.value).toLocaleDateString("en-In");
   outputdate.value =formatteddate;
   }
   else{
      alert("Please check the reCAPTCHA box to submit the lead");
      event.preventDefault();
   }
}
function timestamp() { 
   var response = document.getElementById("g-recaptcha-response"); 
   if (response == null || response.value.trim() == "") 
      {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
         elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = 
         JSON.stringify(elems);
       } } setInterval(timestamp, 500); 