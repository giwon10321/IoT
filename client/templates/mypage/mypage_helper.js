/**
 * Created by kwongiwon on 15. 3. 5..
 */
Template.mypageTemplate.helpers({
    devices : function(){
        return Devices.find();
    }
});

Template.mypageTemplate.events({
    'click .edit': function(){

    },
    'click .delete': function(e){
        e.preventDefault();
        if(confirm("Delete?")){
            Devices.remove(this._id);
        }
    }
});