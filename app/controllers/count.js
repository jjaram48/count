import Ember from 'ember';

var countController = {
  totalCount : 0,
  nullCount: true,
  actions: {

    addCount: function () {
      this.set('totalCount', this.totalCount.get() + 1);
      this.nullCount.set(false);
    }
  }
};

export default Ember.Controller.extend({
});
