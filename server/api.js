/**
 * Created by kwongiwon on 15. 3. 4..
 */
Meteor.methods({
    insertTemp: function(values){
        check(this.userId, String);
        check(values,{
            measuredDate: Date,
            value: Number,
            deviceToken: String
        });

        var user = Meteor.user();
        var device = Devices.findOne({userId: user._id, deviceToken: values["deviceToken"]});
        var temperature = _.extend(values,{
            userId: user._id,
            deviceId: device._id
        });

        var temperatureId = Temperatures.insert(temperature);

        return temperatureId;
    }
});