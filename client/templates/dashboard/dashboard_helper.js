/**
 * Created by kwongiwon on 15. 3. 5..
 */
Template.dashboardTemplate.helpers({
   devices: function(){
       return Devices.find();
   }
});

Template.dashboardTemplate.events({
   'click .detail': function(e){
       //console.log(this._id);
       e.preventDefault();

       Router.go('/dashboard/'+this._id);
   }
});

Template.dashboardTemplate.rendered = function(){

};

Template.dashboardItemTemplate.helpers({
    temp: function(deviceId){
        var temperatures = Temperatures.find({deviceId: deviceId});
        return temperatures.fetch()[temperatures.count()-1];
    }
});

Template.dashboardItemTemplate.rendered = function(){
    var self = this;

};

Template.dashboardTemperatureCircle.rendered = function(){

    var self = this;
    var $target = "#temp-circle-"+self.data._id;
    var circle = new ProgressBar.Circle($target, {
        color: '#FF6666',
        strokeWidth: 6,
        trailWidth: 6,
        text: {
            value: '0',
            className: 'circle-text'
        },
        step: function(state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
        }
    });
    Tracker.autorun(function(){
        var temperature = Temperatures.findOne({deviceId: self.data._id}, {sort: {measuredDate: -1}});
        if(temperature){
            circle.animate(temperature.value/ 100);
        }else{
            circle.animate(0);
        }
    });
};

Template.dashboardHumidityCircle.rendered = function(){

    var self = this;
    var $target = "#humi-circle-"+self.data._id;
    var circle = new ProgressBar.Circle($target, {
        color: '#3366FF',
        strokeWidth: 6,
        trailWidth: 6,
        text: {
            value: '0',
            className: 'circle-text'
        },
        step: function(state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
        }
    });
    Tracker.autorun(function(){
        var temperature = Humidities.findOne({deviceId: self.data._id}, {sort: {measuredDate: -1}});
        if(temperature){
            circle.animate(temperature.value/ 100);
        }else{
            circle.animate(0);
        }
    });
};

Template.dashboardDetailTemplate.rendered = function(){

};

Template.dashboardDetailTempChart.rendered = function(){
    var self = this;
    var target = "temperature-chart-"+self.data._id;
    var columns = [
        {
            type: 'datetime',
            name: 'measuredDate'
        },
        {
            type: 'number',
            name: 'value'
        }
    ];

    var graphOptions = {
        title: "온도(°C)",
        height: 300,
        curveType: 'function',
        colors : ['#FF6666']
    };
    Tracker.autorun(function(){
        var temperatures = Temperatures.find({deviceId: self.data._id}, {sort: {measuredDate: -1}, limit: 100}).fetch();
        var dataset = createDataset(temperatures, columns);
        var options = {
            colums: columns,
            dataset: dataset,
            graphOptions: graphOptions
        };

        drawChart(target, options);
    });
};

Template.dashboardDetailHumiChart.rendered = function(){
    var self = this;
    var target = "humidity-chart-"+self.data._id;
    var columns = [
        {
            type: 'datetime',
            name: 'measuredDate'
        },
        {
            type: 'number',
            name: 'value'
        }
    ];

    var graphOptions = {
        title: "습도(%)",
        height: 300,
        curveType: 'function',
        colors : ['#3366FF']
    };
    Tracker.autorun(function(){
        var humidities = Humidities.find({deviceId: self.data._id}, {sort: {measuredDate: -1}, limit: 100}).fetch();
        var dataset = createDataset(humidities, columns);
        var options = {
            colums: columns,
            dataset: dataset,
            graphOptions: graphOptions
        };

        drawChart(target, options);
    });
};

function createDataset(data, columns){
    var rows = [];

    data.forEach(function(currentValue){
        var row = [];
        columns.forEach(function(column){
            row.push(currentValue[column.name]);
        });
        rows.push(row);
    });
    return rows;
}

function drawChart(target, options){

    var data = new google.visualization.DataTable();
    options['colums'].forEach(function(currentValue){
        data.addColumn(currentValue['type'], currentValue['name']);
    });

    data.addRows(options.dataset);

    $div = $('#'+target);
    if($div.length){
        var chart = new google.visualization.LineChart($div[0]);
        chart.draw(data, options['graphOptions']);
    }
}