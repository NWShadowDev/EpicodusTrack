$(document).ready(function() {
$("form").submit(function(event){

  var nameDisplay = $(".nameDisplay").val();
  var design = parseInt($("#design").val());
  var interAct = parseInt($("#interAct").val());
  var company =parseInt($("#company").val());
  var language = parseInt($("#language").val());
  var enviro = parseInt($("#enviro").val());


  var designCounter;
  var javaCounter;
  var phpCounter;

    if (design = 2) {
      designCounter++;
    } else if (design = 1 ) {
      javaCounter++;
    } else (design = 1)
      phpCounter++;

    if (interAct = 2) {
      designCounter++;
    } else if (interAct = 1) {
      javaCounter++;
    } else (interAct = 1)
        phpCounter++;

      if (company = 2 ) {
          designCounter++;
      } else if (company = 1) {
        javaCounter++;
      } else (company = 1)
            phpCounter++;

      if (language = 2) {
        designCounter++;
      } else if (language = 1) {
        javaCounter++;
      } else (language = 1)
            phpCounter++;
});
      if (enviro = 2) {
        designCounter++;
      } else if (enviro = 1) {
        javaCounter++;
      } else (enviro === 1)
        phpCounter++;

  if(designCounter <= 10) {
    $("#designCSSTrack").show();
    else if (javaCounter <=5) {
   $("#phpDrupTrack").show();

  }else{
    $("#javaAndroidTrack").show();
  }
  event.preventDefault();
});
});
