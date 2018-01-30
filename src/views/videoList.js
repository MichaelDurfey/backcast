var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.render();

  },
  
  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderVideo, this);
    this.$el.html(this.template());
    this.renderVideo();
  },

  renderVideo: function(video) {
    var movie = new Video({exampleVideoData});
    var videoView = new VideoListEntryView({model: movie});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
