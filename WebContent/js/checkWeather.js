/* 
 * 
 */

$(document).ready(function(){
    $("#check").click(function(){
    	var location = $("#location").val();
    	alert(location);
    	$.ajax({
    		url: 'http://api.openweathermap.org/data/2.5/weather',
    		data: {
    			q : location,
    			APPID :'e3c9e296ad1fbea5a28f9adfd906ef2d',
	   },
   success: function(data) {
	   var far = ((data.main.temp - 273.15) * 9/5) + 32;
	   var text = location + " weather: "+"\n" + Math.floor(far) + " degree Fahrenheit";
	   //$("#result").empty().append(location+" weather: "+"\n").append("\n").append(Math.floor(far) + " degree Fahrenheit");
	   $("#result").empty().append(text);
   },
   type: 'GET'
});
    });
});