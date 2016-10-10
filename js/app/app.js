define(['jquery',
        'backbone',
        'backbone.localStorage',
        'underscore',
        'snoowrap',
        'app/collections/subreddit',
        'app/views/subreddit'], 
function($, backbone, store, _, snoowrap, SubredditCollection, SubredditView) {
  app = {}
  app.subredditList = new SubredditCollection.SubredditList();
  app.SidebarView = backbone.View.extend({
    el: '#sidebar',
    initialize: function(){
      this.input=this.$('#subreddit-input');
      app.subredditList.on('add', this.addOne, this);
      app.subredditList.fetch();
    },
    events: {
      'keypress #subreddit-input': 'createSubredditOnEnter'
    },
    createSubredditOnEnter: function(e){
      if (e.which!==13 || !this.input.val().trim() ){
        return;
      }
      app.subredditList.create(this.newAttributes());
      this.input.val('');
    },
    addOne: function(subreddit) {
      chrome.storage.sync.set({'subredditList':app.subredditList});
      var view = new SubredditView.SubredditView({model:subreddit});
      $('#subreddit-list').append(view.render().el);
    },
    newAttributes: function(){
      return {
        subreddit: "r/"+this.input.val().trim()
      }
    }
  });
  app.sidebarView = new app.SidebarView()

});

