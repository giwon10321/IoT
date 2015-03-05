/**
 * Created by kwon on 15. 2. 13..
 */
Meteor.publish('devices', function(userId){
    return Devices.find({userId: userId});
});