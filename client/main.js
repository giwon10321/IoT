/**
 * Created by kwongiwon on 15. 3. 5..
 */

Meteor.subscribe('devices', Meteor.userId());

Template.registerHelper("deviceCollection", Devices)
