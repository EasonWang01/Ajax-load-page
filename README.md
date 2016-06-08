# Ajax-load-page
Ajax for SPA 


Usage

when button click load a html page. 
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
