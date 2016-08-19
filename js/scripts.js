$(document).ready(function() {
$("form").submit(function(event){

  var name = $(".nameDisplay").val();
  var design = parseInt($("#design").val());
  var interAct = parseInt($("#interAct").val());
  var company =parseInt($("#company").val());
  var language = parseInt($("#language").val());
  var enviro = parseInt($("#enviro").val());
  $(".nameDisplay").text(name);


  var designCounter = 0;
  var javaCounter = 0;
  var phpCounter = 0;

  if (design === 1) {
      designCounter++;
    } else {
      javaCounter++;
      phpCounter++;
    }

    if (interAct === 1) {
        designCounter++;
      } else {
        javaCounter++;
        phpCounter++;
      }

      if (company === 1) {
      designCounter++;
    } else {
      javaCounter++;
      phpCounter++;
    }

    if (language === 1) {
        designCounter++;
      } else {
        javaCounter++;
        phpCounter++;
      }

      if (enviro === 1) {
      designCounter++;
    } else {
      javaCounter++;
      phpCounter++;
    }

  if(designCounter <= 10) {
    $("#designCSSTrack").slideDown();
  }else if (javaCounter <=5) {
   $("#phpDrupTrack").show();
  }else{
    $("#javaAndroidTrack").show();
  }

  event.preventDefault();
});
});
