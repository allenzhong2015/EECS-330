google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColors);

function weeklyChart() {
        var data = google.visualization.arrayToDataTable([
          ['Weekly Activity', 'Facebook', 'Instagram', 'Twitter'],
          ['Messaging', 120, 140, 112],
          ['Browsing', 117, 246, 125],
          ['Watching Videos', 166, 112, 130],
          ['Posting', 130, 64, 135]
        ]);

        var options = {
          chart: {
            title: 'Social Media Usage Breakdown',
            subtitle: 'Profile: Matthew Wang',
          },
          bars: 'vertical',
          vAxis: {format: 'decimal', title: "Minutes Spent"},
          height: 500,
          colors: ['#E74C3C', '#9B59B6'  , '#5DADE2']
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

        var btns = document.getElementById('btn-group');

        btns.onclick = function (e) {

          if (e.target.tagName === 'BUTTON') {
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
          }
        }
      }

      function monthlyChart() {
              var data = google.visualization.arrayToDataTable([
                ['Monthly Activity', 'Facebook', 'Instagram', 'Twitter'],
                ['Messaging', 230, 450, 410],
                ['Browsing', 717, 916, 825],
                ['Watching Videos', 116, 712, 532],
                ['Posting', 1350, 1154, 115]
              ]);

              var options = {
                chart: {
                  title: 'Social Media Usage Breakdown',
                  subtitle: 'Profile: Matthew Wang',
                },
                bars: 'vertical',
                vAxis: {format: 'decimal', title: "Minutes Spent"},
                height: 500,
                colors: ['#E74C3C', '#9B59B6'  , '#5DADE2']
              };

              var chart = new google.charts.Bar(document.getElementById('chart_div'));

              chart.draw(data, google.charts.Bar.convertOptions(options));

              var btns = document.getElementById('btn-group');

              btns.onclick = function (e) {

                if (e.target.tagName === 'BUTTON') {
                  options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
                  chart.draw(data, google.charts.Bar.convertOptions(options));
                }
              }
            }

            function weeklyChart2() {
                    var data = google.visualization.arrayToDataTable([
                      ['Weekly Activity', 'Facebook', 'Instagram', 'Twitter'],
                      ['Messaging', 12, 18, 112],
                      ['Browsing', 157, 246, 125],
                      ['Watching Videos', 166, 92, 13],
                      ['Posting', 10, 64, 135]
                    ]);

                    var options = {
                      chart: {
                        title: 'Social Media Usage Breakdown',
                        subtitle: 'Profile: Matthew Wang',
                      },
                      bars: 'vertical',
                      vAxis: {format: 'decimal', title: "Minutes Spent"},
                      height: 500,
                      colors: ['#E74C3C', '#9B59B6'  , '#5DADE2']
                    };

                    var chart = new google.charts.Bar(document.getElementById('chart_div'));

                    chart.draw(data, google.charts.Bar.convertOptions(options));

                    var btns = document.getElementById('btn-group');

                    btns.onclick = function (e) {

                      if (e.target.tagName === 'BUTTON') {
                        options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
                        chart.draw(data, google.charts.Bar.convertOptions(options));
                      }
                    }
                  }

                  function monthlyChart2() {
                          var data = google.visualization.arrayToDataTable([
                            ['Monthly Activity', 'Facebook', 'Instagram', 'Twitter'],
                            ['Messaging', 230, 450, 410],
                            ['Browsing', 717, 916, 825],
                            ['Watching Videos', 116, 712, 532],
                            ['Posting', 1350, 1154, 115]
                          ]);

                          var options = {
                            chart: {
                              title: 'Social Media Usage Breakdown',
                              subtitle: 'Profile: Matthew Wang',
                            },
                            bars: 'vertical',
                            vAxis: {format: 'decimal', title: "Minutes Spent"},
                            height: 500,
                            colors: ['#E74C3C', '#9B59B6'  , '#5DADE2']
                          };

                          var chart = new google.charts.Bar(document.getElementById('chart_div'));

                          chart.draw(data, google.charts.Bar.convertOptions(options));

                          var btns = document.getElementById('btn-group');

                          btns.onclick = function (e) {

                            if (e.target.tagName === 'BUTTON') {
                              options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
                              chart.draw(data, google.charts.Bar.convertOptions(options));
                            }
                          }
                        }
