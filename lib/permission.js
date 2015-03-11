/**
 * Created by kwongiwon on 15. 3. 11..
 */
isOwned = function(userId, object){
    return object && object.userId === userId;
};