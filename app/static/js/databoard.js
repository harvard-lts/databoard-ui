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

  let data = JSON.parse(drs_data);
  console.log(data);

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


  let pieOptions1 = {
    cutoutPercentage: 85,
    legend: {
      position: "bottom",
      padding: 5,
      labels: { pointStyle: "circle", usePointStyle: true },
    },
    plugins: {
      title: {
        display: true,
        text: "Progress by bytes",
        padding: { top: 10, bottom: 30 },
      },
    },
  };
  let pieData1 = {
    labels: [
      "Pending",
      "In Process",
      "Failure",
      "Unrecoverable",
      "Sensitive",
      "On Hold",
      "Success",
    ],
    datasets: [
      {
        backgroundColor: colors.slice(0, 7),
        borderWidth: 0,
        data: [2000, 700, 200, 350, 700, 500, 4000],
      },
    ],
  };
  let pie1 = document.getElementById("pie1");
  if (pie1) {
    new Chart(pie1, {
      type: "pie",
      data: pieData1,
      options: pieOptions1,
    });
  }

  let pieOptions2 = {
    cutoutPercentage: 85,
    legend: {
      position: "bottom",
      padding: 5,
      labels: { pointStyle: "circle", usePointStyle: true },
    },
    plugins: {
      title: {
        display: true,
        text: "Progress by objects",
        padding: { top: 10, bottom: 30 },
      },
    },
  };
  let pieData2 = {
    labels: [
      "Pending",
      "In Process",
      "Failure",
      "Unrecoverable",
      "Sensitive",
      "On Hold",
      "Success",
    ],
    datasets: [
      {
        backgroundColor: colors.slice(0, 7),
        borderWidth: 0,
        data: [10, 25, 50, 40, 45, 30, 10],
      },
    ],
  };
  let pie2 = document.getElementById("pie2");
  if (pie2) {
    new Chart(pie2, {
      type: "pie",
      data: pieData2,
      options: pieOptions2,
    });
  }
});
