import Ember from 'ember';

export default Ember.Controller.extend({
    contactOpen: true,
    // fieldInFocus: false,

    actions: {
        show_get_in_touch: function() {
            Ember.$(".liquid-container").addClass('minimize');
            Ember.$("#get-in-touch").addClass('active');
            // Ember.$('body').css("overflow", "hidden");
            this.toggleProperty('contactOpen');
        },

        close_get_in_touch: function() {
            Ember.$('body').css("overflow", "visible");
            Ember.$(".liquid-container").removeClass('minimize');
            Ember.$("#get-in-touch").removeClass('active');
            this.toggleProperty('contactOpen');
        },

        input_field_in_focus: function() {
            Ember.$('input:focus').siblings().css({
                "left": "0",
                "bottom": "5px"
            });
            // this.toggleProperty('fieldInFocus');
        },

        select_field_in_focus: function() {
            Ember.$('select:focus').siblings().css({
                "left": "0",
                "bottom": "5px"
            });
            // this.toggleProperty('fieldInFocus');
        },

        textarea_in_focus: function() {
            Ember.$('textarea:focus').siblings().css({
                "left": "0",
                "bottom": "5px"
            });
            // this.toggleProperty('fieldInFocus');
        },
    }
});