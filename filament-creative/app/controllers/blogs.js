import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		changeImage: function(){
			Ember.$('.blog-list li').on("mouseenter", function(){
				var current = $(this).attr('class');
				$('#image-array li').stop(true, false).fadeOut(500);
				$('#image-array li.' + current).stop(true, false).fadeIn(500);
			});
		},
	}
});