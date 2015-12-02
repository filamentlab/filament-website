import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		changeImage: function(){
			Ember.$('.blog-list li').on("mouseenter", function(){
				var current = Ember.$(this).attr('class');
				Ember.$('#image-array li').stop(true, false).fadeOut(500);
				Ember.$('#image-array li.' + current).stop(true, false).fadeIn(500);
			});
		},
	}
});