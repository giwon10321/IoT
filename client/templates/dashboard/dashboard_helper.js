/**
 * Created by kwongiwon on 15. 3. 5..
 */
Template.dashboardTemplate.helpers({
   devices: function(){
       return Devices.find();
   }
});