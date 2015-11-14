import Ember from 'ember';

export default Ember.Controller.extend({
    contactOpen: true,

    actions: {
        show_get_in_touch: function() {
            // later, change this so that on a click, liquid-container 
            // gets a class attached to it that makes it shrink/scale down
            // to the bottom
            Ember.$("#get-in-touch").toggle("slow");
            this.toggleProperty('contactOpen');
        },

        input_field_in_focus: function() {
            Ember.$('input:focus').siblings().css({
                "left": "0",
                "bottom": "0"
            });
        },

        select_field_in_focus: function() {
            Ember.$('select:focus').siblings().css({
                "left": "0",
                "bottom": "0"
            });
        },

        textarea_in_focus: function() {
            Ember.$('textarea:focus').siblings().css({
                "left": "0",
                "bottom": "0"
            });
        },
    }
});