import Ember from 'ember';

// <<<<<<< HEAD
// var countController = {
//   totalCount : 0,
//   nullCount: true,
//   actions: {

//     addCount: function () {
//       this.set('totalCount', this.totalCount.get() + 1);
//       this.nullCount.set(false);
//     }
//   }
// };

// export default Ember.Controller.extend({
// =======
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

// >>>>>>> c71376137b354230f3d789910417fbcf1930c371
});
