# Ajax-load-page
Ajax for SPA 


##Usage

when button clicked, loading a html page. 
```
document.getElementById('testSend').addEventListener('click',function(){

  loadhtml('test1.html',function(e){
   document.getElementById('test11').innerHTML = e;
   execScript('test11');
  })
})


```

test11.html
```
<style>
#tese{
	color: red;
}

</style>
	<p id="tese">I'm test</p>

	<p>I'm test</p>
	
<script type="text/javascript">
	console.log(23)
</script>
```


#API

####loadhtml(file,callback)
the response content will be in `e` of `callback(e)`.

####execScript(container)
the script inside the html which being loading will not be automatic execute,so you need to call this function. 


##進階版
1.可加上下面，使其有url路徑
```
  history.pushState({ page: "bar.html" },"", "bar.html");
```
第一個參數為之後使用`history.state`時可讀取出你第一個參數紀錄的物件

第二個參數沒什麼用處

第三個參數為你想要放入的url

2.之後為了讓我們點擊瀏覽器左上方回到上一頁時可以跟著改變畫面內容，所以可以使用下面函式偵測
```
window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
```

3.
```
window.onpopstate = function(event) {
//偵測現在在哪一個畫面
  var url = event.state.page
//呼叫更改畫面函式  
changeScreen(url);  
  
  
};
```
接著寫更改畫面函式  
```
changeScreen = function(url){

//url為onpopstate讀到的url

	switch(url) {
	    case "bar.html":
	        loadhtml('test1.html',function(e){
		   document.getElementById('test11').innerHTML = e;
		   execScript('test11');
		})
	        break;
	    case "restaurant.html":
	        loadhtml('restaurant.html',function(e){
		   document.getElementById('test11').innerHTML = e;
		   execScript('test11');
		})
	        break;
	    default:
	        //default code block
	}
}
```
##如果點選F5或重新整理後顯示無法get路徑，到你的server新增url即可`app.get('test1')`
