/**
 * Created by kwongiwon on 15. 3. 6..
 */
Meteor.publish('humidities', function(){
    if(!this.userId){
        this.ready();
        return ;
    }
    return Humidities.find({userId: this.userId});
});