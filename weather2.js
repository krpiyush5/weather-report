function show()
{
	console.log(JSON.parse(this.responseText));
	var a=JSON.parse(this.responseText);
	
	var city=document.getElementById("name");
	var country=document.getElementById("country");
	var temp=document.getElementById("temp");
	var mintemp=document.getElementById("mintemp");
	var maxtemp=document.getElementById("maxtemp");
	var pressure=document.getElementById("pressure");
	var humidity=document.getElementById("humidity");
	city.innerHTML="City : "+a.name;
	country.innerHTML="Country : "+a.sys.country;
	temp.innerHTML="Temperature : "+(a.main.temp-273).toFixed(2);
	mintemp.innerHTML="Min Temperature : "+(a.main.temp_min-273).toFixed(2);
	maxtemp.innerHTML="Max Temperature : "+(a.main.temp_max-273).toFixed(2);
	pressure.innerHTML="Pressure : "+a.main.pressure;
	humidity.innerHTML="Humidity : "+a.main.humidity;
	
	document.getElementById("compTable").style="";
}
function errordisplay()
{
	var error=document.getElementById("error");
	error.innerHTML="City does not exist.Enter valid City name ";
	alert("City name does not exist ");
	var city=document.getElementById("name");
	var country=document.getElementById("country");
	var temp=document.getElementById("temp");
	var mintemp=document.getElementById("mintemp");
	var maxtemp=document.getElementById("maxtemp");
	var pressure=document.getElementById("pressure");
	var humidity=document.getElementById("humidity");
	
	
	name.innerHTML="";
	country.innerHTML="";
	temp.innerHTML="";
	mintemp.innerHTML="";
	maxtemp.innerHTML="";
	pressure.innerHTML="";
	humidity.innerHTML="";
	
}
function user(url)
{
	var x= new XMLHttpRequest();
	x.addEventListener("load",show);
	x.addEventListener("error",errordisplay);
	x.open("GET",url);
	x.send();
}
function loading()
{
	var input=document.getElementById("cityname");
	user("http://api.openweathermap.org/data/2.5/weather?q="+input.value+"&APPID=053236a5c521da0bd535224b1c56c519");
var error=document.getElementById("error");
	}
