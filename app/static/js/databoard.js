$(document).ready(function () {
    // font styling
    Chart.defaults.color = '#1e1e1e';
    Chart.defaults.font.family = 'Trueno';
    Chart.defaults.font.size = 14;
    Chart.defaults.font.weight = 300;
    Chart.defaults.font.lineHeight = 1.733;

    Chart.defaults.plugins.title.font.size = 20;
    Chart.defaults.plugins.title.font.weight = 700;
    Chart.defaults.plugins.title.font.lineHeight = 1.5;

    let data = JSON.parse(files_per_owner_data);

    let i = data.length - 1; // last updated row, data[0] = headers

    var ctx = document.getElementById('filesPerOwnerChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['DIV.LIBR', 'FHCL.JUD', 'HUL.TEST'],
            datasets: [{
                label: '# of Files',
                data: [1151, 900, 5928],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});