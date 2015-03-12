/**
 * Created by kwongiwon on 15. 3. 6..
 */
if(typeof Schemas === 'undefined'){
    Schemas = {};
}

Schemas.Humidities = new SimpleSchema({
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
        label: "Humidity"
    },
    measuredDate: {
        type: Date,
        label: "Measured Date"
    }
});