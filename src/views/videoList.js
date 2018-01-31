var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  el: $('.list'),
  switch: function(e) {

    
  },

  render: function() {
    //collection is
    this.$el.append(this.template());
    this.$el.empty();
    this.collection.forEach(this.renderVideo, this);
    // this.renderVideo();
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
