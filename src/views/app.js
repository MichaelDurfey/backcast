var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
  }, 


  render: function() {
    new SearchView({el: this.$('.search')});
    new VideoPlayerView({el: this.$('.player')});
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
