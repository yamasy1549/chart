$(document).ready(function() {
  loadGraph(setVariables());

  $("#form-table").on('change', function() {
    loadGraph(setVariables());
  });
});

function setVariables() {
  var xAxis = [];
  var xAxisLimit = $("#xAxisLimit").val();

  for(var i=0; i<=xAxisLimit; i++) {
    xAxis.push(i);

    if(!$("#form" + i)[0])
      $("#form-table").append("<tr><td>" + i + "</td><td><input type='number' id='form" + i + "'></td></tr>");
  }

  var points = [];
  for(var i=0; i<=xAxisLimit; i++) {
    points.push($("#form" + i).val());
  }

  return setData(xAxis, points);
};

function setData(xAxis, points) {
  var data = {
    labels: xAxis,
    datasets: [
      {
        label: "first dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: points,
      },
    ]
  };

  return data;
}

function loadGraph(data) {
  var linectx = $("#lineGraph").get(0).getContext("2d");
  var lineGraph = new Chart(linectx).Line(data);

  var barctx = $("#barGraph").get(0).getContext("2d");
  var barGraph = new Chart(barctx).Bar(data);
};
