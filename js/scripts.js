$(document).ready(function() {
  //debugger;
$("form").submit(function(event){
  var nameDisplay = $("#nameDisplay").val();
  var design = parseInt($("#design").val());
  var interAct = parseInt($("#interAct").val());
  var company = parseInt($("#company").val());
  var language = parseInt($("#language").val());
  var enviro = parseInt($("#enviro"));
  var successRate = design + interAct + company + language + enviro;

  if(successRate <= 5) {
    $("#designTrack").show();

  }else{
    $("#programmerTrack").show();
  }

  event.preventDefault();
});
});
