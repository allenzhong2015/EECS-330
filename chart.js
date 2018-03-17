google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColors);

function daily() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Time');
  data.addRows([
    [0, 0],    [1, 10],   [2, 23],  [3, 17],   [4, 18],  [5, 9],
    [6, 11],   [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],[12, 12], [13, 35], [14, 19], [15, 25], [16, 21], [17, 35],[18, 44],[19, 3],[20, 5],[21, 55],[22, 30],[23, 35],[24, 50]

  ]);

  var options = {
    hAxis: {
      title: 'February 11th (Hours)'
    },
    vAxis: {
      title: 'Minutes Late'
    },
    colors: ['#a52714', '#097132']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function weekly() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  vAxis: { gridlines: { count: 100 } };
  data.addColumn('number', 'Time');
  data.addRows([
    [0, 0],    [1, 10],   [2, 23],  [3, 17],   [4, 18],  [5, 9],
    [6, 11],   [7, 27]

  ]);

  var options = {
    hAxis: {
      title: 'February - Week 2 (Days)',
      maxValue:7,
      format:'0',
      ticks: [0, 1, 2,3,4,5,6,7]
    },
    vAxis: {
      title: 'Minutes Late per Day'
    },
    colors: ['#a52714', '#097132']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function monthly() {
var data = google.visualization.arrayToDataTable([
  ['Monthly Activity', 'Time'],
  ['Week 1', 21],
  ['Week 2', 8],
  ['Week 3', 0],
  ['Week 4', 0]
]);  

//data.addColumn('number', 'X');

  /*        
  data.addColumn('number', 'Time');
  data.addRows([
    [0, 0],    [1, 100],   [2, 23],  [3, 17],   [4, 18],  [5, 9]
  ]);
  */
  var options = {
    hAxis: {
      title: 'Februrary 2018 (Weeks)'
    },
    vAxis: {
      title: 'Hours Late per Week'
    },
    colors: ['#a52714', '#097132']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}