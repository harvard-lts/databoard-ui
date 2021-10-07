$(document).ready(function () {

  // font styling
  Chart.defaults.color = "#1e1e1e";
  Chart.defaults.font.family = "Trueno";
  Chart.defaults.font.size = 14;
  Chart.defaults.font.weight = 300;
  Chart.defaults.font.lineHeight = 1.733;

  Chart.defaults.plugins.title.font.size = 20;
  Chart.defaults.plugins.title.font.weight = 700;
  Chart.defaults.plugins.title.font.lineHeight = 1.5;

  // chart colors
  let colors = [
    "#c0c0c0",
    "#f8c21c",
    "#a51c30",
    "#eb001b",
    "#414141",
    "#0579b8",
    "#3E6F7D",
    "#8DBA4B",
    "red",
  ];
  let chartColors = ["#414141", "#f8c21c", "#a51c30", "#8DBA4B"];
  let lineColor = "#a51c30";

  // labels
  let chartLabels = ["Pending", "Migrated", "Failed migration", "Verified"];
  let tableLabels = [
    "Pending",
    "In process",
    "On hold",
    "Sensitive",
    "Needs verification",
    "Failure",
    "Verify failed",
    "Verified",
    "Unrecoverable*",
  ];

  let data = JSON.parse(files_per_owner_data);
  console.log(data);

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

  let filesPerOwnerOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Files per owner",
        padding: { top: 10, bottom: 30 },
      },
    },
  };

  let filesPerOwnerData = {
    labels: [
      'DIV.LIBR',
      'FHCL.JUD',
      'HUL.TEST'
    ],
    datasets: [
      {
        label: 'Total files',
        data: [1151,9,55928],
        backgroundColor: colors[0],
      },
      {
        label: 'Total size',
        data: [86988928,53299115,63552833503],
        backgroundColor: colors[1],
      },
    ],
  };
  let filesPerOwner = document.getElementById("filesPerOwner");
  if (filesPerOwner) {
    new Chart(filesPerOwner, {
      type: "bar",
      data: filesPerOwnerData,
      options: filesPerOwnerOptions,
    });
  }
});
