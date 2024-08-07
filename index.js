function updateclock(){
  const date = new Date();
  let hours = date.getHours().toString().padStart(2,0);
  const maridiem = hours >12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2,0);
  const seconds = date.getSeconds().toString().padStart(2,0);
  const toSring = `${hours}:${minutes}:${seconds} ${maridiem}`;

  document.getElementById("clock").innerHTML= toSring;
 }

 updateclock();

setInterval(updateclock,1000);