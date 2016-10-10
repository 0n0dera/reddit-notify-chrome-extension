define(['jquery', 
	    'backbone', 
	    'backbone.localStorage', 
	    'underscore',
	    'app/models/subreddit'], 
function($, backbone, store, _, SubredditModel) {
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
		SubredditList: backbone.Collection.extend({
		    model: SubredditModel.Subreddit,
		    localStorage: new Store('subreddit-list')
		})
	};
}
);