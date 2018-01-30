var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
    
  },
  
  // searchAPI: function() {
  //   $.ajax({
  //     url: 'https://www.googleapis.com/youtube/v3/search',
  //     type: 'GET',
  //     success: function(data) {
  //       console.log('success', data);
  //     },
  //     error: function(data) {
  //       console.error('error', data);
  //     }
  //   });
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
