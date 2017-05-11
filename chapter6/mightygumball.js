
window.onload = getGumSalesData;

function getGumSalesData(){
  // 本地服务器文件:
  //var url = "http://localhost:7777/sales.json";
  // 远程服务器文件：
  var url = "http://gumball.wickedlysmart.com";
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
  var salesDiv = document.getElementById("sales");
  var sales = JSON.parse(responseText);
  for(var i=0;i<sales.length;i++){
    var sale = sales[i];
    var name = sale.name;
    var saleAmount = sale.sales;

    var saleItemDiv = document.createElement("div");
    saleItemDiv.setAttribute("class", "saleItem");
    saleItemDiv.innerHTML = name + " sold " + saleAmount + "gumballs";
    salesDiv.appendChild(saleItemDiv);

  }
}
