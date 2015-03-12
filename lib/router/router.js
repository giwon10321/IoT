/**
 * Created by kwongiwon on 15. 3. 5..
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){
        return [
            Meteor.subscribe('temperatures'),
            Meteor.subscribe('humidities'),
            Meteor.subscribe('devices')
        ];
    }
});

Router.route('/',{name: 'mainTemplate'});
Router.route('/dashboard',{name: 'dashboardTemplate'});
Router.route('/dashboard/:_id',{
    name: "dashboardDetailTemplate",
    data: function(){
        return Devices.findOne(this.params._id);
    }
});
Router.route('/mypage', {name: 'mypageTemplate'});