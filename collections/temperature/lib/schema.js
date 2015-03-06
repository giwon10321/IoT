/**
 * Created by kwongiwon on 15. 3. 6..
 */
if(typeof Schemas === 'undefined'){
    Schemas = {};
}

Schemas.Temperatures = new SimpleSchema({
    userId: {
        type: String,
        label: "User ID"
    },
    deviceId: {
        type:String,
        label: "Device ID"
    },
    value: {
        type: Number,
        label: "Temperature"
    },
    measuredDate: {
        type: Date,
        label: "Measured Date"
    }
});