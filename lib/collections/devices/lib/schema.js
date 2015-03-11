/**
 * Created by kwon on 15. 2. 13..
 */
if(typeof Schemas === 'undefined'){
    Schemas = {};
}

Schemas.Devices = new SimpleSchema({
    userId: {
        type: String,
        label: "User ID",
        autoValue: function(){
            return Meteor.userId();
        }
    },
    deviceToken: {
        type: String,
        label: "Device Token",
        autoValue: function(){
            return Random.id();
        }
    },
    deviceType:{
        type: String,
        label: "Device Type",
        autoform: {
            type : "select",
            options: function(){
                return [
                    {label: "Type A", value:"Type A"},
                    {label: "Type B", value:"Type B"}
                ];
            }
        }
    },
    description: {
        type: String,
        label: "Description"
    },
    registeredAt: {
        type: Date,
        label: "RegisteredAt",
        autoValue: function(){
            return new Date();
        }
    }
});