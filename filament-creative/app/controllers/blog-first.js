import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        pressed: function() {
            Ember.$("#test").toggle("slow");
        }
    }
});