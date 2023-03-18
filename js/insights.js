$(document).ready(function () {
   
    

    // prepare chart data as an array
    var sampleData = [
            { Day: '1일', Running: 0, Goal: 40 },
            { Day: '2일', Running: 30, Goal: 50 },
            { Day: '3일', Running: 10, Goal: 60 },
            { Day: '4일', Running: 17, Goal: 40 },
            { Day: '5일', Running: 20, Goal: 50 },
            { Day: '6일', Running: 25, Goal: 60 },
            { Day: '7일', Running: 19, Goal: 90 },
            { Day: '8일', Running: 40, Goal: 90 },
            { Day: '9일', Running: 40, Goal: 90 },
            { Day: '10일', Running: 40, Goal: 90 },
            { Day: '11일', Running: 40, Goal: 90 },
            { Day: '12일', Running: 40, Goal: 90 },
            { Day: '13일', Running: 40, Goal: 90 },
            { Day: '14일', Running: 40, Goal: 90 },
            { Day: '15일', Running: 40, Goal: 90 }
        ];
    // prepare jqxChart settings
    var settings = {
        title: "",
        description: " ",
        enableAnimations: true,
        showLegend: true,
        padding: { left: 10, top: 10, right: 15, bottom: 10 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: sampleData,
        colorScheme: 'scheme05',

        xAxis: {
            dataField: 'Day',
            unitInterval: 1,
            tickMarks: { visible: true, interval: 1 },
            gridLinesInterval: { visible: true, interval: 1 },
            valuesOnTicks: false,
            showGridLines: false,
            padding: { bottom: 10 }
        },
        valueAxis: {
            unitInterval: 10,
            minValue: 0,
            maxValue: 50,
            title: { text: '' },
            labels: { horizontalAlignment: 'right' }
        },


        seriesGroups:
            [
                {
                    type: 'line',
                    series:
                    [
                        {
                            dataField: 'Running',
                            symbolType: 'square',
                            labels:
                            {
                                visible: true,
                                backgroundColor: '#9928FF',
                                backgroundOpacity: 0.2,
                                borderColor: '#9928FF',
                                borderOpacity: 0.7,
                                padding: { left: 5, right: 5, top: 0, bottom: 0 }
                            }
                        }
                    ]
                }
            ]
    };
    // setup the chart
    $('#chartContainer1').jqxChart(settings);

    
});

