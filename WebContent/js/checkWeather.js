/**
 * 
 */

$.ajax({
   url: 'http://api.openweathermap.org/data/2.5/weather',
   data: {
	      q : 'Delhi',
	      mode : 'html',
	      APPID :'e3c9e296ad1fbea5a28f9adfd906ef2d'
	   },
   success: function(data) {
	   $("#result").append(data);
   },
   type: 'GET'
});