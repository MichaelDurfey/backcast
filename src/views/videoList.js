var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  el: $('.list'),

  render: function() {
    //collection is
    this.$el.empty();
    this.$el.append(this.template());
    this.collection.forEach(this.renderVideo, this);
    // this.renderVideo();
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({el: this.el, model: video});
   
    // this.$el.children().append();
    // this.$el.append();
    // this.$el.append()
    // this.$el.append(videoView);
    // this.$el.append(this)/s
  },

  template: templateURL('src/templates/videoList.html')

});
