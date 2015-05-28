function countupby(limit, interval) {
  var resultSet = [];
  for ( var i = interval; i <= limit; i += interval ) {
    resultSet.push(i);
  }
  return resultSet;
}

$(function() {
  $("form#countupform").submit(function(event) {
    var limit = parseInt($("input#limitinput").val());
    var interval = parseInt($("input#intervalinput").val());
    var start = performance.now();
    var results = countupby(limit, interval);
    var end = performance.now();
    console.log(end - start);
    var resultString = results.join(", ");
    $("p#results").text(resultString);
    event.preventDefault();
  });
});
