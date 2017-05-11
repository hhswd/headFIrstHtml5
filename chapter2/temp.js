function showTemps(){
  var temps = [59.2, 60.1, 63, 65, 62];
  for(var i=0;i<temps.length;i++){
  var tempid = "temp" + i;
  var time = i;
  var li = document.getElementById(tempid);
  if(i === 0){

    li.innerHTML = "The temperature at noon was " + temps[i];
  } else {

    li.innerHTML = "The temperature at " + time + " was " + temps[i];
    }
  }
}

window.onload = showTemps;

