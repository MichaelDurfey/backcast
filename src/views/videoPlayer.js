var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    // this.set('')
    this.$el.html('<div class="loading">Please wait...</div>');
    this.render();
  },

  render: function() {
    this.$el.empty();
    let video = this.attributes.attributes;
    console.log(this.attributes);
    this.$el.append(this.template(video));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
