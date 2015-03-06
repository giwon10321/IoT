/**
 * Created by kwongiwon on 15. 3. 6..
 */
Meteor.subscribe('devices', Meteor.userId());
Meteor.subscribe('temperatures', Meteor.userId());
