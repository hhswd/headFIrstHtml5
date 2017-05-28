window.onload = function(){
  // preview按钮的控制
  var previewButton = document.getElementById("previewButton");
  // 点击按钮后定时更新画布
  previewButton.onclick = refreshCanvas;

};

/**
 * 定时更新画布
 * @return {[type]} [description]
 */
function refreshCanvas(){
  // 定时更新画布
  var start = 0; // 开始更新的时间
  setTimeout(function(){
    var interval = setInterval(previewHandler, 1000);
    var end = 30000; // 结束更新的时间
    setTimeout(function(){clearInterval(interval);}, end);
  }, start);
}

/**
 * preview按钮的处理函数
 * @return {[type]} [description]
 */
function previewHandler(){
  var canvas = document.getElementById("tshritCanvas");
  var context = canvas.getContext("2d");

  // 背景颜色刷新
  fillBackgroundColor(canvas, context);
  // 绘制图案
  drawShape(canvas, context);
  // 文字前景色处理
}

/**
 * 填充背景颜色
 * @param  {[type]} canvas  画布对象
 * @param  {[type]} context 上下文对象
 * @return {[type]}         [description]
 */
function fillBackgroundColor(canvas, context){
  var bgcOption = document.getElementById("backgroundColor");
  var index = bgcOption.selectedIndex;
  var bgc = bgcOption.options[index].value;
  context.fillStyle = bgc;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * 绘制图形
 * @param  {[type]} canvas  [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
function drawShape(canvas, context){
  var shapeOption = document.getElementById("shape");
  var shape = shapeOption.options[shapeOption.selectedIndex].value;
  // 绘制随机图形
  for(var i=0;i<20;i++){
    if(shape == "squares")
      drawRandomSquare(canvas, context);
    else if(shape == "circles")
      drawRandomCircle(canvas, context);
  }
}

/**
 * 绘制随机正方形
 * @param  {[type]} canvas  [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
function drawRandomSquare(canvas, context){
  var w = Math.floor(Math.random()*40);
  var x = Math.floor(Math.random()*canvas.width);
  var y = Math.floor(Math.random()*canvas.height);
  context.fillStyle = "lightblue";
  context.fillRect(x, y, w, w);
}

/**
 * 绘制随机圆形
 * @param  {[type]} canvas  [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
function drawRandomCircle(canvas, context){

}






