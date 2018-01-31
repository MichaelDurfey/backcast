var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.$el.html(this.template());
    this.render();
  }, 

  state: function() {
    this.collection.set('videos', this.collection);
  },


  render: function() {
    let mainVideo = this.collection.at(0);
    console.log(this);
    new SearchView({el: this.$('.search')});
    new VideoPlayerView({el: $('.player'), collection: this.collection});
    new VideoListView({el: $('.list'), collection: this.collection});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
