/**
 * Created by kwongiwon on 15. 3. 6..
 */
Humidities.allow({
    insert: function(userId){
        return !!userId;
    }
});