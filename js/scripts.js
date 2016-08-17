$(document).ready(function() {
$("form").submit(function(event){

  var nameDisplay = $("#nameDisplay").val();
  var design = parseInt($("#design").val());
  var interAct = parseInt($("#interAct").val());
  var company =parseInt($("#company").val());
  var language = parseInt($("#language").val());
  var enviro = parseInt($("#enviro").val());
  var phpDrupal = parseInt($("#phpDrupal").val());
  var successRate = design + interAct + company + language + enviro;

  var designCounter;
  var javaCounter;
  var phpCounter;

    if (design === 1 && interAct === 3) {
      designCounter++;
    } else if (design === 2) {
      javaCounter++;
    } else (interAct === 3 && phpDrupal === 4);

  if(successRate <= 5) {
    $("#designCSSTrack").show();

  }else{
    $("#javaAndroidTrack").show();
  }

  event.preventDefault();
});
});
