/**
 * Created by kwongiwon on 15. 3. 6..
 */
Meteor.publish('temperatures', function(){
    if(!this.userId){
        this.ready();
        return ;
    }
    return Temperatures.find({userId: this.userId}, {sort: {measuredDate: -1}, limit: 100});
});