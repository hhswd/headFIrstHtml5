window.onload = function(){
  var canvas = document.getElementById("smiley");
  var context = canvas.getContext("2d");

  // 画布
  context.fillStyle = "white";
  context.strokeRect(0, 0, canvas.width, canvas.height);

  // 大脸
  context.beginPath();
  context.arc(300,300,200,0,2*Math.PI,true);
  context.fillStyle = "lightblue";
  context.fill();
  context.stroke();

  // 左眼
  context.beginPath();
  context.arc(200,250,25,0,2*Math.PI,true);
  context.stroke();

  //右眼
  context.beginPath();
  context.arc(400,250,25,0,2*Math.PI,true);
  context.stroke();

  // 鼻子
  context.moveTo(300,300);
  context.lineTo(300,350);
  context.stroke();

  // 嘴
  context.beginPath();
  context.arc(300,350,75, 20*Math.PI/180, 160*Math.PI/180,false);
  context.stroke();

};
