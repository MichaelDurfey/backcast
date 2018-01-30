var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    // this.$el.attr( _.result(this, 'attributes'));
    this.render();
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
