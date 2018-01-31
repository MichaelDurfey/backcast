var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.$el.html(this.template());
    this.render();
  }, 


  render: function() {
    let mainVideo = this.collection.at(0);
    new SearchView({el: this.$('.search')});
    new VideoPlayerView({el: $('.player'), attributes: this.collection.at(0)});
    new VideoListView({el: $('.list'), collection: this.collection});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
