import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeImage: function(){
      Ember.$('.blog-list li').on("mouseenter", function(){
        var current = $(this).attr('class');

        $('#image-array li.' + current).fadeIn(500);
      });

      Ember.$('.blog-list li').on("mouseleave", function(){
        var current = $(this).attr('class');

        $('#image-array li.' + current).fadeOut(500);
      });
    },

  }
});
