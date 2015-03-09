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
        console.log(device);
        var temperature = _.extend(values,{
           userId: user._id
        });
        return true;
    }
});