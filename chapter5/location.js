// google map全局变量
var map;

/**
 * 获取navigator.geolocation对象
 * @return {[type]} [description]
 */
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("No geolocation support");
  }
}


/**
 * 获取navigator.geolocation对象后调用
 * @param  {[type]} position [description]
 * @return {[type]}          [description]
 */
function displayLocation(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // 显示当前位置坐标：
  var locationE = document.getElementById("location");
  locationE.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
  locationE.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
  console.log(position.timestamp);

  // 目标点坐标：
  var desCoords = {
    latitude: 0,
    longitude: 0
  };

  // 计算两点距离：
  var distance = getDistance(position.coords, desCoords);
  var distanceE = document.getElementById("distance");
  distanceE.innerHTML = "Distance: " + distance;
  // 显示地图：
  showMap(position.coords);
}


/**
 * 显示google map
 * @param  {[type]} coords [description]
 * @return {[type]}        [description]
 */
function showMap(coords){
  var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
  var mapOption = {
    center: googleLatAndLong,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOption);

  // 添加大头针：
  var content = "Your location is : " + coords.latitude + ", " + coords.longitude;
  addMarker(map, googleLatAndLong, content);

}


/**
 * 向地图上的特定位置添加大头针
 * @param {[type]} map      [description]
 * @param {[type]} position [description]
 */
function addMarker(map, position, content){
  var markerOptions = {
    position: position,
    map: map,
    clickable: true
  };
  var marker = new google.maps.Marker(markerOptions);

  // 信息窗口的配置：
  var infoWindowOptions = {
    position: position,
    content: content
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  // 大头针监听者：
  google.maps.event.addListener(marker, "click", function(){
    infoWindow.open(map);
  });
}

/**
 * 计算两点距离
 * @param  {[type]} stCoords  [description]
 * @param  {[type]} desCoords [description]
 * @return {[type]}           [description]
 */
function getDistance(stCoords, desCoords){
  var stLatRads = degreesToRadians(stCoords.latitude);
  var stLongRads = degreesToRadians(stCoords.longitude);
  var desLatRads = degreesToRadians(desCoords.latitude);
  var desLongRads = degreesToRadians(desCoords.longitude);

  var Radius = 6371;
  var distance = Math.acos(Math.sin(stLatRads)*Math.sin(desLatRads)+
      Math.cos(stLatRads)*Math.cos(desLatRads)*Math.cos(stLongRads-desLongRads))*Radius;

  return distance;

}


/**
 * 转换角度为弧度
 * @param  {[type]} degrees [description]
 * @return {[type]}         [description]
 */
function degreesToRadians(degrees){
  var radians = (degrees * Math.PI)/180;
  return radians;
}







