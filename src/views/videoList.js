var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  el: $('.list'),

  render: function() {
    //collection is
    this.$el.append(this.template());
    this.$el.empty();
    this.collection.forEach(this.renderVideo, this);
    // this.renderVideo();
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({el: this.el, model: video});
  },

  template: templateURL('src/templates/videoList.html')

});
