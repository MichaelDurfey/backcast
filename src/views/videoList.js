var VideoListView = Backbone.View.extend({
  

  render: function() {
    this.$el.empty();
    this.$el.children().detach();
    console.log(this.collection);
    this.collection.forEach(this.renderVideo, this);
    this.$el.html(this.template());
  },

  renderVideo: function(video) {
    
    var videoView = new VideoListEntryView({model: movie});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
