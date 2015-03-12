/**
 * Created by kwon on 15. 2. 13..
 */
Devices.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    remove: function(userId, doc){
        return isOwned(userId, doc);
    },
    update: function(userId, doc){
        return isOwned(userId, doc);
    }
});