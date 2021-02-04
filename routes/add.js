var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var jsonName = {
		"name":request.query.name,
		"description":request.query.description,
		"imageURL":"http://lorempixel.com/400/400/people"
	}
	data.friends.push(jsonName);
	console.log(jsonName);

	response.render('index', {
  		"friends":data['friends']
  	})

 }