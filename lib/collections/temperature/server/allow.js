/**
 * Created by kwongiwon on 15. 3. 6..
 */
Temperatures.allow({
    insert: function(userId){
        return !!userId;
    }
});