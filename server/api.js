/**
 * Created by kwongiwon on 15. 3. 4..
 */
Meteor.methods({
    test: function(arg1){
        console.log(arg1);
        return "success";
    }
});