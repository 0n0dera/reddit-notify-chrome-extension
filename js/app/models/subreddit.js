define(['jquery', 
	    'backbone', 
	    'backbone.localStorage', 
	    'underscore'], 
function($, backbone, store, _) {
	/*Subreddit = backbone.Model.extend({
		defaults: {
			name: '',
			keywords: []
		}
	});
	return {
		makeSubreddit: function(name){
			return new Subreddit({name:name});
		}
	};*/
	
	return {
		Subreddit: backbone.Model.extend({
				   	defaults: {
				      subreddit:'',
				      keywords: []
				    }
				})
	};
});