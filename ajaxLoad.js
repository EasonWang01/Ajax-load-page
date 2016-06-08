loadhtml = function(url,callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
   
     var  response =  xhttp.responseText;
     //將response訊息傳入callback
      (callback)(response);
      };
  };
  xhttp.open("GET", url, true);
  xhttp.send();


};


execScript = function(container){
     //在div內的script不會執行，所以手動讓他執行
      var _Container = document.getElementById(container)
      var arr = _Container.getElementsByTagName('script')
      for (var n = 0; n < arr.length; n++){
          eval(arr[n].innerHTML)
        }
};
