/**
 * Created by kwongiwon on 15. 3. 5..
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/',{name: 'mainTemplate'});
Router.route('/dashboard',{name: 'dashboardTemplate'});
Router.route('/mypage',{name: 'mypageTemplate'});