window.onload = function(){
  // 定时更新数据
  setInterval(updateSource, 3000);
};

// 更新数据源接点
function updateSource(){
  var headTag = document.getElementsByTagName("head")[0];
  // 若已存在脚本引用，则删除
  var scriptTag = document.getElementById("updateSalesData");
  if(scriptTag !== null){
   headTag.removeChild(scriptTag);
  }
  // 创建新的script节点
  scriptTag = document.createElement("script");
  scriptTag.setAttribute("id", "updateSalesData");
  scriptTag.setAttribute("src", "http://gumball.wickedlysmart.com/?callback=updateSales");
  headTag.appendChild(scriptTag);
}

function getGumSalesData(){
  // 本地服务器文件:
  var url = "http://localhost:7777/sales.json";
  // 远程服务器文件：
 // var url = "http://gumball.wickedlysmart.com";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function(){
    if(request.status ==200){
      updateSales(request.responseText);
    }
    else{
      var body = document.getElementsByTagName("body");
      var error = document.createElement("error");
      error.innerHTML = "ERROR";
      body.appendChild(error);
    }
  };
  request.send(null);
}

function updateSales(sales){
  // 获取sales显示区域的dom节点：
  var saleDiv = document.getElementById("sales");
  // 遍历sales数组，分行输出销售数据：
  for(var i = 0; i<sales.length; i++){
    var sale = sales[i];
    var saleItem = document.createElement("div");
    saleItem.setAttribute("class", "saleItem");
    // 定义内容:
    saleItem.innerHTML = sale.name + " sell " + sale.sales + "gumballs";
    saleDiv.appendChild(saleItem);
  }

}
