define(['jquery', 'backbone', 'underscore','snoowrap'], function($, backbone, _, snoowrap) {
  var AppView = backbone.View.extend({
    el: $('#container'),
    initialize: function() {
      this.render();
    },
    render: function(){
      this.$el.html("Hello world");
    }
  });
  app = new AppView();
  console.log(snoowrap);
});

