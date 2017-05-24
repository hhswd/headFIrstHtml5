
window.onload = getGumSalesData;

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

function updateSales(responseText){
  // 获取sales显示区域的dom节点：
  var saleDiv = document.getElementById("sales");
  var sales = JSON.parse(responseText);
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
