import Ember from 'ember';


var countController = Ember.ObjectController.extend({
    actions: {
        
        addCount: function() {
          count : 1;
            this.set('isCounting', true);
        },

        // acceptChanges: function() {
        //     // Remove is editing property
        //     this.set('isEditing', false);
 
        //     // If the todo is empty, delete it
        //     // otherwise save it with the new title
        //     if(Ember.isEmpty(this.get('model.title'))) {
        //         this.send('removeTodo');
        //     } else {
        //         this.get('model').save();
        //     }
        // },
        
        // removeTodo: function() {
        //     var todo = this.get('model');
        //     todo.deleteRecord();
        //     todo.save();
        // }
    }
});

export default countController;
