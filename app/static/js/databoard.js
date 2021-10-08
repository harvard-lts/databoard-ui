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

  // pull in data
  let data = JSON.parse(files_per_owner_data);
  console.log(data);

  let i = data.length - 1; // last updated row


  let owners = [];
  let totalFiles = [];
  let totalSize = [];
  for (i = 0; i < data.length; i++) {
    owners.push(data[i]["CODE"]);
    totalFiles.push(data[i]["Total files"]);
    totalSize.push(data[i]["Total size"]);
  }

  // Register the plugin to all charts:
  Chart.register(ChartDataLabels);
  Chart.defaults.set('plugins.datalabels', {
    align: 'end',
    anchor: 'end'
  });


  // Number of files per owner (bar chart)
  let filesPerOwnerOptions = {
    responsive: true,
    indexAxis: 'x',
    plugins: {
      title: {
        display: true,
        text: "Number of files per owner",
        padding: { top: 10, bottom: 30 },
      }
    },
  };
  let filesPerOwnerData = {
    labels: owners,
    datasets: [
      {
        label: 'Total files',
        data: totalFiles,
        backgroundColor: colors[0],
        datalabels: {
          align: 'end',
          anchor: 'end'
        }
      }
    ],
  };
  let filesPerOwner = $("#filesPerOwner");
  if (filesPerOwner) {
    new Chart(filesPerOwner, {
      type: "bar",
      data: filesPerOwnerData,
      options: filesPerOwnerOptions,
    });
  }

  let sizePerOwnerOptions = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: "Size of files per owner",
        padding: { top: 10, bottom: 30 },
      },
    },
  };
  let sizePerOwnerData = {
    labels: owners,
    datasets: [
      {
        label: 'Total size',
        data: totalSize,
        backgroundColor: colors[1],
      },
    ],
  };
  let sizePerOwner = $("#sizePerOwner");
  if (sizePerOwner) {
    new Chart(sizePerOwner, {
      type: "bar",
      data: sizePerOwnerData,
      options: sizePerOwnerOptions,
    });
  }


  let perOwnerOptions = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: "Statistics per owner",
        padding: { top: 10, bottom: 30 },
      },
    },
  };
  let perOwnerData = {
    labels: owners,
    datasets: [
      {
        label: 'Total files',
        data: totalFiles,
        backgroundColor: colors[2],
      },{
        label: 'Total size',
        data: totalSize,
        backgroundColor: colors[5],
      }
    ],
  };
  let perOwner = $("#combinedPerOwner");
  if (perOwner) {
    new Chart(perOwner, {
      type: "bar",
      data: perOwnerData,
      options: perOwnerOptions,
    });
  }
});
