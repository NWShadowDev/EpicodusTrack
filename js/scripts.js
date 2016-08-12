$(document).ready(function() {

$("form").submit(function(event){

  alert ("STOP!");

  var nameDisplay = $("#nameDisplay").val();
  var design = parseInt($("#design").val());
  var interAct = parseInt($("#interAct").val());
  var company = parseInt($("#company").val());
  var language = parseInt($("#language").val());
  var enviro = parseInt($("#enviro").val());
  var successRate = design + interAct + company + language + enviro;

  if(successRate <= 5) {
    $("#designTrack").show();

  }else{
    $("#programmerTrack").show();
  }
$("#designTrack").text(designTrack);
$("#programmerTrack").text(programmerTrack);
  event.preventDefault();
});
});
