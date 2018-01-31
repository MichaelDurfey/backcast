var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    // this.$el.attr( _.result(this, 'attributes'));
    this.$el.next().empty();
    this.render();
    // this.$el.on('click', this.handleClick.bind(this));
  },

  events: {
    'click': 'handleClick'
  },

  handleClick: function(e) {
    this.model.select();
  },

  render: function() {    
    this.$el.append(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
