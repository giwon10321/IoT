/**
 * Created by kwongiwon on 15. 3. 30..
 */
Meteor.startup(function () {
    Temperatures._ensureIndex({ "userId": 1});
    Humidities._ensureIndex({ "userId": 1});
});