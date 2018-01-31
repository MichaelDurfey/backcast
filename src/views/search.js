var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
    // this.searchAPI();
    this.on('all', this.handleChange(), this);
  },
  
  searchAPI: function() {

    // Backbone.sync = function(method, model){
    //   alert(method + ': ' + model.url);
    // };

    // var accounts = 

    
    // $.ajax({
    //   url: 'https://www.googleapis.com/youtube/v3/search',
    //   type: 'GET',
    //   success: function(data) {
    //     console.log('success', data);
    //   },
    //   error: function(data) {
    //     console.error('error', data);
    //   }
    // });   
  },
  
  handleChange: function(e) {
    console.log(this);
  }, 

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
