/**
 * Created by kwongiwon on 15. 3. 5..
 */
Template.mypageTemplate.helpers({
    devices : function(){
        return Devices.find();
    }
});