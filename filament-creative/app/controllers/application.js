import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        show_get_in_touch: function() {
            // later, change this so that on a click, liquid-container 
            // gets a class attached to it that makes it shrink/scale down
            // to the bottom
            Ember.$("#get-in-touch").toggle("slow");
        }
    }
});