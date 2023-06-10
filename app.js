const endDate = "9 April 2023 09:27 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  //this if condition will not take values in negative
  if(diff < 0) return;
  
  //convert into days
  inputs[0].value = Math.floor(diff / 3600 / 24);

  //convert into hours   
  inputs[1].value = Math.floor(diff / 3600) % 24;

  //convert into minutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  
  //convert into seconds
  inputs[3].value = Math.floor(diff) % 60;   

}
clock()

// 1 day = 24 hrs 
// 1 hr = 60 min 
// 60 min = 3600 sec

setInterval(
    () => {
    clock()
    }, 1000
)