function beforeSubmit(){
   let outputdate = document.querySelector(".outputDate");
} let inputdate = document.querySelector(".inputDate");
let formatteddate = new Date(inputdate.value).toLocaleDateString("en-In");
outputdate.value =formatteddate;