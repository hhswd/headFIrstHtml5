window.onload = function(){
  // preview按钮的控制
  var previewButton = document.getElementById("previewButton");
  // 点击按钮后定时更新画布
  //previewButton.onclick = refreshCanvas;
  // 点击按钮后更新一次画布文字
  previewButton.onclick = previewHandler;

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
  //绘制logo
  var tBird = new Image();
  tBird.src = "twitterBird.png";
  tBird.onload = function(){
    context.drawImage(tBird, 20, 120, 70, 70);
  };

  // 背景颜色刷新
  fillBackgroundColor(canvas, context);
  // 前景色处理
  var fgcSelection = document.getElementById("foregroundColor");
  var fgc = fgcSelection.options[fgcSelection.selectedIndex].value;
  context.fillStyle = fgc;
  // 绘制文字
  drawTweet(canvas, context);
  // 绘制图案
  //drawShape(canvas, context);
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
  // 获取形状选项
  var shapeSelection = document.getElementById("shape");
  var shape = shapeSelection.options[shapeSelection.selectedIndex].value;
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
  context.fillRect(x, y, w, w);
}

/**
 * 绘制随机圆形
 * @param  {[type]} canvas  [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
function drawRandomCircle(canvas, context){
  var radius = Math.floor(Math.random()*40);
  var x = Math.floor(Math.random()*canvas.width);
  var y = Math.floor(Math.random()*canvas.height);

  context.beginPath();
  context.arc(x, y, radius, 0, degreesToRadians(360), true);

  context.fill();
}

function degreesToRadians(degrees){
  return (degrees * Math.PI)/180;
}

/**
 * 从网站获取jsonp后更新tweet选项
 * @param  {[type]} tweets [description]
 * @return {[type]}        [description]
 */
function updateTweets(tweets){
  var tweetSelection = document.getElementById("tweets");

  for(var i=0;i<tweets.length;i++){
    var tweet = tweets[i];
    var tweetOption = document.createElement("option");
    tweetOption.text = tweet.text;
    tweetOption.value = tweet.text.replace("\"", "'");
    tweetSelection.options.add(tweetOption);
  }
  tweetSelection.selectedIndex = 0;
}

/**
 * 绘制文字
 * @param  {[type]} canvas  [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
function drawTweet(canvas, context){
  context.font = "bold 1em sans-serif";
  context.textAlign = "left";
  context.fillText("I saw this tweet", 20, 40);

  var tweetSelection = document.getElementById("tweets");
  var tweet = tweetSelection.options[tweetSelection.selectedIndex].value;
  context.font = "italic 1.2em serif";
  context.fillText(tweet, 30, 100);

  context.font = "bold 1em sans-serif";
  context.textAlign = "right";
  context.fillText("and all I got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
}






