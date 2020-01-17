Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'blue';

var ctx = document.getElementById("myChart");

var stars = [135850, 52122, 148825, 16939, 9763];
var lineExample1 = [120000, 150000, 145421, 54012, 135845];
var lineExample2 = [50245, 200142, 44542, 45654, 56598];

var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
      },
      {
          label: 'ExampleLine1',
          data: lineExample1,
          backgroundColor: '#f443368c',
          borderColor: '#f443368c',
          borderWidth: 1,
          type: 'line',
          fill: false
      },
      {
          label: 'ExampleLine2',
          data: lineExample2,
          backgroundColor: '#487283f4',
          borderWidth: '#873h3f576',
          borderWidth: 1,
          type: 'line',
          fill: false
      }
    ]
  },
  options: {
      legend: {
          display: true,
          position: 'bottom',
          labels: {
              boxWidth: 80,
              fontColor: 'rgb(49, 130, 122)'
          }
      }
  }
});