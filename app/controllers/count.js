import Ember from 'ember';

export default Ember.Controller.extend({

  countValue: 0,

  showTapMessage: function() {
    if (this.get('countValue') === 0) {
      return true;
    } else {
      return false;
    }
  }.property('countValue'),

  actions: {

    addOne: function() {
      this.set('countValue', this.get('countValue') + 1);
    },

  },

});
