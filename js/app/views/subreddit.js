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
		SubredditView: backbone.View.extend({
		    template: _.template($('#subreddit-template').html()),
		    render: function(){
		      this.$el.html(this.template(this.model.toJSON()));
		      return this;
		    },
		    initialize: function(){
		      this.model.on('destroy', this.remove, this);
		    },
		    events: {
		      'click .destroy': 'destroyTodo'
		    },
		    destroyTodo: function(){
		      this.model.destroy();
		    }
		})
	};
}
);