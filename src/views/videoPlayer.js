var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    // this.set('')
    this.$el.html('<div class="loading">Please wait...</div>');
    this.render();
    this.listenTo(this.collection, 'select', this.switch);
  },

  switch: function(select) {
    console.log('clicked', select);
    this.model = select;
    this.render();
  },

  render: function() {
    this.$el.empty();
    console.log(this);
    let video = this.model || this.collection.at(0);
    this.$el.append(this.template(video.attributes.snippet));
  },

  template: templateURL('src/templates/videoPlayer.html')

});
