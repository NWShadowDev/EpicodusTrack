$(document).ready(function() {
$("form").submit(function(event){

  var nameDisplay = $(".nameDisplay").val();
  var design = parseInt($("#design").val());
  var interAct = parseInt($("#interAct").val());
  var company =parseInt($("#company").val());
  var language = parseInt($("#language").val());
  var enviro = parseInt($("#enviro").val());
  var successRate = design + interAct + company + language + enviro;

  var counter = 0;
  var designCounter;
  var javaCounter;
  var phpCounter;


    if (design === 2 && interAct === 2) {
      designCounter++;
    } else if (design === 1 ) {
      javaCounter++;
    } else (interAct ===1  && design === 1)
      phpCounter++;

  if(successRate <= 5) {
    $("#designCSSTrack").show();

  }else{
    $("#javaAndroidTrack").show();
  }

  event.preventDefault();
});
});
