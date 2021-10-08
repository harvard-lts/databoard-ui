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


  let largeOwners = [];
  let largeTotalFiles = [];
  let largeTotalSize = [];
  let mediumOwners = [];
  let mediumTotalFiles = [];
  let mediumTotalSize = [];
  let smallOwners = [];
  let smallTotalFiles = [];
  let smallTotalSize = [];
  for (i = 0; i < data.length; i++) {
    if (parseInt(data[i]["Total files"]) >= 1000000) {
      largeOwners.push(data[i]["Organization"]);
      largeTotalFiles.push(data[i]["Total files"]);
      largeTotalSize.push(data[i]["Total size"]);
    }
    if (parseInt(data[i]["Total files"]) >= 100000 && parseInt(data[i]["Total files"]) <= 999999) {
      mediumOwners.push(data[i]["Organization"]);
      mediumTotalFiles.push(data[i]["Total files"]);
      mediumTotalSize.push(data[i]["Total size"]);
    }
    if (parseInt(data[i]["Total files"]) <= 100000) {
      smallOwners.push(data[i]["Organization"]);
      smallTotalFiles.push(data[i]["Total files"]);
      smallTotalSize.push(data[i]["Total size"]);
    }    
  }

  // Register the plugin to all charts:
  Chart.register(ChartDataLabels);
  Chart.defaults.set('plugins.datalabels', {
    align: 'end',
    anchor: 'end'
  });


  // Large number of files per owner (bar chart)
  let largeFilesPerOwnerOptions = {
    responsive: true,
    indexAxis: 'x',
    plugins: {
      title: {
        display: true,
        text: "Number of files per owner (1,000,000+ files)",
        padding: { top: 10, bottom: 30 },
      }
    },
  };
  let largeFilesPerOwnerData = {
    labels: largeOwners,
    datasets: [
      {
        label: 'Total files',
        data: largeTotalFiles,
        backgroundColor: colors[0],
        datalabels: {
          align: 'end',
          anchor: 'end'
        }
      }
    ],
  };
  let largeFilesPerOwner = $("#largeFilesPerOwner");
  if (largeFilesPerOwner) {
    new Chart(largeFilesPerOwner, {
      type: "bar",
      data: largeFilesPerOwnerData,
      options: largeFilesPerOwnerOptions,
    });
  }

  // Medium number of files per owner (bar chart)
  let mediumFilesPerOwnerOptions = {
    responsive: true,
    indexAxis: 'x',
    plugins: {
      title: {
        display: true,
        text: "Number of files per owner (100,000 - 999,000 files)",
        padding: { top: 10, bottom: 30 },
      }
    },
  };
  let mediumFilesPerOwnerData = {
    labels: mediumOwners,
    datasets: [
      {
        label: 'Total files',
        data: mediumTotalFiles,
        backgroundColor: colors[0],
        datalabels: {
          align: 'end',
          anchor: 'end'
        }
      }
    ],
  };
  let mediumFilesPerOwner = $("#mediumFilesPerOwner");
  if (mediumFilesPerOwner) {
    new Chart(mediumFilesPerOwner, {
      type: "bar",
      data: mediumFilesPerOwnerData,
      options: mediumFilesPerOwnerOptions,
    });
  }

  // Small number of files per owner (bar chart)
  let smallFilesPerOwnerOptions = {
    responsive: true,
    indexAxis: 'x',
    plugins: {
      title: {
        display: true,
        text: "Number of files per owner (less than 100,000 files)",
        padding: { top: 10, bottom: 30 },
      }
    },
  };
  let smallFilesPerOwnerData = {
    labels: smallOwners,
    datasets: [
      {
        label: 'Total files',
        data: smallTotalFiles,
        backgroundColor: colors[0],
        datalabels: {
          align: 'end',
          anchor: 'end'
        }
      }
    ],
  };
  let smallFilesPerOwner = $("#smallFilesPerOwner");
  if (smallFilesPerOwner) {
    new Chart(smallFilesPerOwner, {
      type: "bar",
      data: smallFilesPerOwnerData,
      options: smallFilesPerOwnerOptions,
    });
  }

  let largeSizePerOwnerOptions = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: "Size of files per owner (1,000,000+ files)",
        padding: { top: 10, bottom: 30 },
      },
    },
  };
  let largeSizePerOwnerData = {
    labels: largeOwners,
    datasets: [
      {
        label: 'Total size',
        data: largeTotalSize,
        backgroundColor: colors[1],
      },
    ],
  };
  let largeSizePerOwner = $("#largeSizePerOwner");
  if (largeSizePerOwner) {
    new Chart(largeSizePerOwner, {
      type: "bar",
      data: largeSizePerOwnerData,
      options: largeSizePerOwnerOptions,
    });
  }

  let mediumSizePerOwnerOptions = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: "Size of files per owner (100,000 - 999,000 files)",
        padding: { top: 10, bottom: 30 },
      },
    },
  };
  let mediumSizePerOwnerData = {
    labels: mediumOwners,
    datasets: [
      {
        label: 'Total size',
        data: mediumTotalSize,
        backgroundColor: colors[1],
      },
    ],
  };
  let mediumSizePerOwner = $("#mediumSizePerOwner");
  if (mediumSizePerOwner) {
    new Chart(mediumSizePerOwner, {
      type: "bar",
      data: mediumSizePerOwnerData,
      options: mediumSizePerOwnerOptions,
    });
  }  

  let smallSizePerOwnerOptions = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: "Size of files per owner (less than 100,000 files)",
        padding: { top: 10, bottom: 30 },
      },
    },
  };
  let smallSizePerOwnerData = {
    labels: smallOwners,
    datasets: [
      {
        label: 'Total size',
        data: smallTotalSize,
        backgroundColor: colors[1],
      },
    ],
  };
  let smallSizePerOwner = $("#smallSizePerOwner");
  if (smallSizePerOwner) {
    new Chart(smallSizePerOwner, {
      type: "bar",
      data: smallSizePerOwnerData,
      options: smallSizePerOwnerOptions,
    });
  }
});
