/**
 * Created by kwongiwon on 15. 3. 6..
 */
Meteor.publish('temperatures', function(userId){
    return Temperatures.find({userId: userId});
});