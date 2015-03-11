/**
 * Created by kwon on 15. 2. 13..
 */
Meteor.publish('devices', function(){
    if(!this.userId){
        this.ready();
        return ;
    }
    return Devices.find({userId: this.userId});
});